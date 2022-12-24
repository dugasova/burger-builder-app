import styled from "styled-components";
import SingleControl from "./SingleControl";

const IngredientControl = ({ ingredients, updataBurger, burgerIngredients, clearBurger }) => {
    return (
        <IngredientControlStyled onClick={updataBurger}>
            <h3 className="create">Create your own burg</h3> 
           {
            ingredients.map((ingredient) => (
                <SingleControl 
                    updataBurger={updataBurger}
                    quantity={burgerIngredients[ingredient]}
                    key={ingredient}
                    ingredient={ingredient}/>
           ))}
           <ClearAllStyled onClick={clearBurger}>Clear all</ClearAllStyled>
        </IngredientControlStyled>
    );
};

const IngredientControlStyled = styled.div({
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: '25%',
});

const ClearAllStyled = styled.button({
    width: "100px",
    height: "50px",
    cursor: "pointer",
    border: "none",
    borderRadius: "20%",
    backgroundColor: "#D2691E",
    alignSelf: "center",
    padding: "30px,",
    marginTop: "20px",
    boxShadow: "2px 2px 2px #fff",
});

export default IngredientControl;