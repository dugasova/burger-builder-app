import styled from "styled-components";
import Image from "../../Image";
import Button from "../../Button";

<<<<<<< HEAD
const SingleControl = ({ingredient, quanttity}) => {
    return (
    <SingleControlStyled>
        <Button action="decrement">-</Button>
        {quanttity}
        <Button action="increment">+</Button>
        <Image name = {ingredient}/>

    </SingleControlStyled>
    );
};
=======
const SingleControl = ({ingredient, quantity, updateBurger}) => {
    return (
    <SingleControlStyled
        data-ingredient={ingredient}
        onClick={updateBurger}
        >
        <Button action="decrement" ingredient={ingredient}>-</Button>
        {quantity}
        <Button action="increment" ingredient={ingredient}>+</Button>
        <Image name={ingredient}/>
    </SingleControlStyled>
    );
};

>>>>>>> HW-21
const SingleControlStyled = styled.div ({
    textAlign: 'center',
});

export default SingleControl;