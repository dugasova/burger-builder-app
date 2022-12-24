import React from "react";
import axios from "axios";
import styled from "styled-components";
import IngredientControl from "./IngredientControl";
import Prices from "./Prices";
import Burger from "./Burger";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
           loading: true,
            prices: [],
            ingredients: [],
            ingredientsOrder: [],
            burgerBuilder: {},
            orderedPrice: "1.00",
        };
    }
    
    findSinglePrice = (ingredient) => {
        return this.state.prices.find(
            (price) => price.name === ingredient
            ).price;
    };
    
    componentDidMount = async () => {
        try {
            this.setState({loading: true});

            const { data } = await axios.get("https://burger-api-xcwp.onrender.com/ingredients")
            
            const ingredients = data.map((ingredient) => ingredient.name)
            const quantities = data.reduce((acc, current) => ({[current.name]: 0, ...acc}), {} )
            this.setState({
                prices: data,
                ingredients: ingredients,
                burgerBuilder: quantities,
                loading: false,
            })
        }
        catch (error) {
            console.error(error)
        }
    }
    
    changeIngredientQuantity = (event) => {
        event.preventDefault();
        const ingredientChoosed = event.target.parentNode.dataset["ingredient"] || event.target.dataset["ingredient"]

        if ( !event.target.dataset["action"] || !event.target.dataset["ingredient"]) {
            return
        }

        const actionChoosed = event.target.dataset["action"] || event.target.parentNode.dataset["action"]
        const ingredientPrice = this.findSinglePrice(ingredientChoosed);

        this.setState ( (prevState) => {
            const copyBurgerBuilder = {...prevState.burgerBuilder};
            const copyIngredientsOrder = [...prevState.ingredientsOrder] ;

            let newPrice = +prevState.orderedPrice;
            if (actionChoosed === "decrement") {
                if (copyBurgerBuilder[ingredientChoosed] > 0) {
                    newPrice -= +ingredientPrice;
                    const index = copyIngredientsOrder.lastIndexOf(ingredientChoosed);
                    copyIngredientsOrder.splice(index, 1);
                    copyBurgerBuilder[ingredientChoosed]--;
                }
            }

            if (actionChoosed === "increment") {
                if (copyBurgerBuilder[ingredientChoosed] < 5 && copyIngredientsOrder.length < 10) {
                    newPrice += +ingredientPrice;
                    copyIngredientsOrder.push(ingredientChoosed);
                    copyBurgerBuilder[ingredientChoosed]++;
                }
            }
            return {
                ...prevState,
                burgerBuilder: copyBurgerBuilder,
                ingredientsOrder: copyIngredientsOrder,
                orderedPrice: newPrice.toFixed(2),
            }
        })
    }

    clearBurger = ()=> {
        const clearBurgerBuilder = {}
        for (const ingredient in this.state.burgerBuilder) {
            clearBurgerBuilder[ingredient] = 0;
        }
        if (this.state.ingredientsOrder.length !== 0) {
            this.setState({
                ingredientsOrder: [],
                burgerBuilder: clearBurgerBuilder,
                orderedPrice : "1.00"
            });
        }
    };

    render () {
        const {prices, ingredients, burgerBuilder, loading, ingredientsOrder, orderedPrice} = this.state;
        return (
            <MainWrapper>
                <Prices allPrices={prices} />
                <Burger 
                ingredientsOrder={ingredientsOrder}
                totalPrice={orderedPrice}  />
                <IngredientControl
                    prices={prices}
                    ingredients = {ingredients}
                    updataBurger = {this.changeIngredientQuantity}
                    burgerIngredients = {burgerBuilder}
                    clearBurger={this.clearBurger}/>
            </MainWrapper>
        )
    }
}

const MainWrapper = styled.div({
    display: "flex",
    flexWrap: "no-wrap",
    jusifyContent: "space-between",
    paddingTop: "50px",
    width: "100%",
    height: "80%",
    alignContent: "center",
});

export default Main;