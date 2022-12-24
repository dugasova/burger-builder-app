import styled from "styled-components";
import SinglePrice from "./SingglePrice"

const Prices = ({allPrices}) => {
    return (
        <PricesStyled>
          <h3 className="price">Our price</h3>
            <div>
                {allPrices.map((price) => {
                    const {name: productName, price: productPrice} = price;
                    return (
                        <SinglePrice
<<<<<<< HEAD
                        key = {productName + productPrice}
                        singleName = {productName}
                        singlePrice = {productPrice} />
                        );
                    })}
            </div>
        </PricesStyled> 
    )
    
    
=======
                            key = {productName + productPrice}
                            singleName = {productName}
                            singlePrice = {productPrice} />
                    );
                })}
            </div>
        </PricesStyled> 
    )
>>>>>>> HW-21
}
const PricesStyled = styled.div({
    display: "flex",
    flexDirection: "column",
<<<<<<< HEAD
    // backgroundColor: "#
    // background: "linear-gradient(90deg, #fcff9e 0%, #c67700 100%)",
=======
>>>>>>> HW-21
    alignContent: "center",
    justifyContent: "center",
    width:"25%",
    textAlign: 'center',
    color: "#3c1414"
 
})

export default Prices;