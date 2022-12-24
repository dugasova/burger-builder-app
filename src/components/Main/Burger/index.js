import styled from "styled-components";

const Burger = ({ingredientsOrder,totalPrice}) => {
    return (
        <BurgerStyled>
            <TotalStyled> Total price {totalPrice} UAH</TotalStyled>
            <BurgerWrapperStyled>
                <TopBurgerStyled
                src={require(`../../../assets/burgerItems/top_bun.png`)}
                />
                {!ingredientsOrder.length && (<PropositionStyled>
                   Start adding ingredients
                   </PropositionStyled>)}
                    {ingredientsOrder.map((item, index) => {
                        return (
                            <ItemIMGStyled 
                            key={item + index}
                            src={require(`../../../assets/burgerItems/${item}.png`)}
                            alt={item}
                            style={{ bottom: 95 + index * 9,
                                zIndex: index + 1,}}
                            />
                        );
                    })}
                <BottomBurgerStyled 
                src={require(`../../../assets/burgerItems/bottom_bun.png`)}
                alt="Bottom bun"/>
             <Checkout>Checkout</Checkout>
            </BurgerWrapperStyled>
            </BurgerStyled>
    );
};

const BurgerStyled = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexBasis: "50%",
    textAlign: "center",
    height: "100%",
});

const BurgerWrapperStyled = styled.div({
  position: "relative",
  width: "80%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const TopBurgerStyled = styled.img({
    top: 0,
    zIndex: "10000",
    width: "300px",
});

const BottomBurgerStyled = styled.img({
    width: "300px"
});

const TotalStyled = styled.h3({
    paddingTop: "20px",
    paddingBottom: "20px",
    color: "#3c1414",
    fontSize: "25px"
});

const Checkout = styled.button ({
    marginTop: "20px",
    width: "60px",
    height:"50px",
    border: "none",
    borderRadius: "10%",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#D2691E",
    boxShadow: "2px 2px 2px #fff"
});
const PropositionStyled = styled.p({
    textTransform: "uppercase",
    position: "absolute",
    top: "60%",
});

const ItemIMGStyled = styled.img({
    width: "300px",
    position: "absolute",
});

export default Burger;