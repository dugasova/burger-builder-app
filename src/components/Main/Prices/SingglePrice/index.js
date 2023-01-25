import styled from "styled-components";
const SinglePrice = ({singleName, singlePrice}) =>{
    return (
        <SinglePriceStyled>
            {singleName}: {singlePrice} UAH
        </SinglePriceStyled>
    );
};

const SinglePriceStyled = styled.div({
    textAlign: " center",
    margin:" 20px 20px",
    fontSize: "20px",
    textTransform: "capitalize",
})
export default SinglePrice;