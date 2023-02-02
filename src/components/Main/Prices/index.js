import styled from "styled-components";
import SinglePrice from "./SingglePrice";
import Loader from "../../Loader";

const Prices = ({allPrices, loading}) => {
    return (
        <PricesStyled>
            <PricesLoading>
              <h3 className="price">Our price</h3>
              {loading ? (<Loader />) : (
                <>
                    {allPrices.map((price) => {
                     const {name: productName, price: productPrice} = price;
                        return (
                            <SinglePrice
                                key = {productName + productPrice}
                                singleName = {productName}
                                singlePrice = {productPrice} />
                        );
                    })}
                </>
            )}
            
            </PricesLoading>
        </PricesStyled> 
    )
}
const PricesLoading = styled.div({})
const PricesStyled = styled.div({
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    width:"25%",
    textAlign: 'center',
    color: "#3c1414"
 
})

export default Prices;