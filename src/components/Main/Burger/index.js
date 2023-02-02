import styled from "styled-components";

const Burger = ({ingredientsOrder, totalPrice}) => {
    return (
        <BurgerStyled>
            <TotalStyled> Total price {totalPrice} UAH</TotalStyled>
            <BurgerWrapperStyled>
                <TopBurgerStyled src={require(`../../../assets/burgerItems/top_bun.png`)} />
                {!ingredientsOrder.length && (<PropositionStyled> Start adding ingredients </PropositionStyled>)}
                    {ingredientsOrder.map((item, idx) => {
                        return (
                            <ItemIMGStyled 
                                key={item + idx}
                                src={require(`../../../assets/burgerItems/${item}.png`)}
                                alt={item}
                                style={{ bottom: 76 + idx * 9, zIndex: idx + 1,}}
                            />
                        );
                    })}
                <BottomBurgerStyled src={require(`../../../assets/burgerItems/bottom_bun.png`)} alt="Bottom bun"/>
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
    position: "relative",
    top: 0,
    zIndex: "111",
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