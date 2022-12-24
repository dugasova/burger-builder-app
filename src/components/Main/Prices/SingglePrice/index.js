import styled from "styled-components";
const SinglePrice = ({singleName, singlePrice}) =>{
    return (
        <SinglePriceStyled>
<<<<<<< HEAD
            {singleName}: {singlePrice}$
=======
            {singleName}: {singlePrice} UAH
>>>>>>> HW-21
        </SinglePriceStyled>
    );
};


const SinglePriceStyled = styled.div({
    textAlign: " center",
<<<<<<< HEAD
    margin:" 20px 20px"
=======
    margin:" 20px 20px",
    fontSize: "20px"
>>>>>>> HW-21
})
export default SinglePrice;