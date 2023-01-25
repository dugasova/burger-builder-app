import styled from "styled-components";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { useState } from "react";
import CheckoutModal from "../CheckoutModal";
import { Button } from "@mui/material";

const style = {
    backgroundColor: "chocolate",
    display: "flex",
    justifyContent: "center",
    width: "160px",
    height: "50px",
    borderRadius: "20%",
    boxShadow: "2px 2px 2px #fff",
    marginBottom: "100px"
  }


const Checkout = ({
    orderSummary,
    orderedPrice,
    handleFastDelivery,
    clearBurger,
}) => {

    const [checkoutModalOpen, setCheckouModalOpen] = useState(false);
    
    const checkoutModalClose = () => {
        setCheckouModalOpen(false);
    };

    const handleCheckoutClick = async => {
        setCheckouModalOpen(true);
    };

    return (
        <CheckoutStyled>
            {checkoutModalOpen && (
                <CheckoutModal
                    orderSummary={orderSummary}
                    orderedPrice={orderedPrice}
                    isOpen={checkoutModalOpen}
                    handleClose={checkoutModalClose}
                    handleFastDelivery={handleFastDelivery}
                    clearBurger={clearBurger}
                />
            )}
            
            <Button
                onClick={+orderedPrice > 1 ? handleCheckoutClick : undefined}
                variant="contained"
                size="large"
                style={style}
                endIcon={<ShoppingCartCheckoutOutlinedIcon />}
                >Checkout</Button>
        </CheckoutStyled>
    );
};

const CheckoutStyled = styled.div({
    display: "flex",
    justifyContent: "space-around",
});

export default Checkout;