import axios from "axios";
import styled from "styled-components";
import IngredientControl from "./IngredientControl";
import Prices from "./Prices";
import Burger from "./Burger";
import React, { useState, useEffect } from "react";
import Checkout from "../Checkout";

function Main () {
    const [prices, setPrices] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [ingredientsOrder, setIngredientsOrder] = useState([]);
    const [burgerBuilder, setBurgerBuilder] = useState({});
    const [loading, setLoading] = useState(true);
    const [orderedPrice, setOrderedPrice] = useState('1.00')
    
    useEffect ( () => {
        (async() => {
            axios("https://burger-api-xcwp.onrender.com/ingredients")
                .then((res) => {
                    const data = res.data
                    setPrices(data)
                    setIngredients(data.map((ingredient) => ingredient.name))
                    setBurgerBuilder(data.reduce((acc, current) => ({[current.name]: 0, ...acc}), {} ))
                    setLoading(false)
                })
                .catch( (err) => { console.error(err)})
        })()
    }, [])

    const findSinglePrice = (ingredient) => {
        return prices.find(
            (price) => price.name === ingredient
            ).price;
    };
    
    const changeIngredientQuantity = (event) => {
        event.preventDefault();
        const ingredientChoosed = event.target.parentNode.dataset["ingredient"] || event.target.dataset["ingredient"]

        if (!event.target.dataset["action"] || !event.target.dataset["ingredient"]) {
            return
        }

        const actionChoosed = event.target.dataset["action"] || event.target.parentNode.dataset["action"]
        const ingredientPrice = findSinglePrice(ingredientChoosed);

        const copyBurgerBuilder = {...burgerBuilder}
        const copyIngredientsOrder = [...ingredientsOrder]

        let newPrice = +orderedPrice;
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
        setBurgerBuilder(copyBurgerBuilder)
        setIngredientsOrder(copyIngredientsOrder)
        setOrderedPrice(newPrice.toFixed(2))
    }

    const clearBurger = () => {
        const clearBurgerBuilder = {}
        for (const ingredient in burgerBuilder) {
            clearBurgerBuilder[ingredient] = 0;
        }
        if (ingredientsOrder.length !== 0) {
                setIngredientsOrder([])
                setBurgerBuilder(clearBurgerBuilder)
                setOrderedPrice("1.00")
        }
    };

    const handleFastDelivery = (fastDelivery) => {
        if (fastDelivery) {
            setOrderedPrice((+orderedPrice + 2.5).toFixed(2))
        } else {
            setOrderedPrice((+orderedPrice - 2.5).toFixed(2))
          }
    }

    return (
        <>
            <MainWrapper>
                <Prices allPrices={prices} loading={loading}/>
                <Burger 
                    ingredientsOrder={ingredientsOrder}
                    totalPrice={orderedPrice}  
                />
                <IngredientControl
                    prices={prices}
                    ingredients = {ingredients}
                    updataBurger = {changeIngredientQuantity}
                    burgerIngredients = {burgerBuilder}
<<<<<<< HEAD
                    clearBurger={clearBurger}
=======
                    clearBurger={this.clearBurger}
>>>>>>> main
                    loading={loading} />
            </MainWrapper>
            <Checkout
                    orderSummary={burgerBuilder}
                    orderedPrice={orderedPrice}
                    handleFastDelivery={handleFastDelivery}
                    clearBurger={clearBurger}
            />                
        </>

    )
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