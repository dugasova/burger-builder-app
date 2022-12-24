import styled from "styled-components";
import Image from "../../Image";
import Button from "../../Button";

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

const SingleControlStyled = styled.div ({
    textAlign: 'center',
});

export default SingleControl;