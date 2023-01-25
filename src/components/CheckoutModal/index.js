import styled from "styled-components";
import { useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, CircularProgress } from "@mui/material";
import Image from "../Main/Image";

import { SignupSchema } from "../../utils/validations/validationSchema";
import { validationRules } from "./../../utils/validations/validation";
import axios from "axios";

const CheckoutModal = ({
    isOpen,
    handleClose,
    orderSummary,
    orderedPrice,
    handleFastDelivery,
    clearBurger
}) => {

    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orderStatus, setOrderStatus] = useState(false); 

    const handleChange = (event) => {
        handleFastDelivery(event.target.checked);
        setChecked(event.target.checked);
    };

    const burgerIngredients = Object.entries(orderSummary).filter((product) => product[1] > 0);
    const createData = (name, amount) => {
        return {name, amount};
    };

    const rows = burgerIngredients.map((ingredient) =>
    createData(ingredient[0], ingredient[1]));

    const handleOrder = async ( data )  => {
        const {
            name: orderName,
            phone: orderPhone,
            email: orderEmail,
            address: orderAddress,
        } = data;

        const orderData = {
            orderName,
            orderPhone,
            orderEmail,
            orderFast: checked,
            orderAddress,
            orderPrice: orderedPrice,
            orderProducts: Object.fromEntries(burgerIngredients), 
        };

        try {
            setLoading(true);
            await axios.post("https://burger-api-xcwp.onrender.com/orders", orderData);
            setLoading(false);
            setOrderStatus(true);
            clearBurger();
        } catch (error) {
            setLoading(false);
            console.error(error);
            setOrderStatus(false);
            clearBurger();
        }
    };
    return (
        <Dialog 
        open={isOpen}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitleStyled>Order</DialogTitleStyled>
        <DialogContent style={{background: "linear-gradient(90deg, #f4bd57 0%, #d08412 100%"}}>
          <br />
          <br />
          {orderStatus ? (
            <OrderSuccessStyled>Order Success</OrderSuccessStyled>
          ) : (
            <>
              <TableContainer component={Paper} style={{background: "linear-gradient(90deg, #f4bd57 0%, #d08412 100%"}}>
                <Table>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell align="left">
                          <Image name={row.name} />
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Monsterrat Bold",
                            fontSize: "22px",
                          }}
                          align="right"
                        >
                          {row.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  isFast: false,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => handleOrder(values)}
              >
                {({ isSubmitting }) => (
                  <FormStyled>
                    <LabelStyled>
                      <FieldStyled
                        validate={validationRules.validateName}
                        type="text"
                        name="name"
                        placeholder={("name")}
                      />
                    </LabelStyled>
                    <ErrorMessage name="name" />
                    <br />
                    <br />
  
                    <LabelStyled>
                      <FieldStyled
                        validate={validationRules.validateEmail}
                        type="email"
                        name="email"
                        placeholder={("email")}
                      />
                    </LabelStyled>
                    <ErrorMessage name="email" />
                    <br />
                    <br />
  
                    <LabelStyled>
                      <FieldStyled
                        validate={validationRules.validatePhone}
                        type="text"
                        name="phone"
                        placeholder={("phone")}
                      />
                    </LabelStyled>
                    <ErrorMessage name="phone" />
                    <br />
                    <br />
  
                    <LabelStyled>
                      <FieldStyled
                        validate={validationRules.validateAddress}
                        type="text"
                        name="address"
                        placeholder={("address")}
                      />
                    </LabelStyled>
                    <ErrorMessage name="address" />
                    <br />
  
                    <LabelStyled>
                      <ElectricBoltOutlinedIcon /> quick (
                     2.5 UAH extra )
                      <Checkbox
                        name="isFast"
                        checked={checked}
                        onChange={handleChange}
                      />
                    </LabelStyled>
                    <br />
                    <br />
                    <FinalPriceStyled>
                      <FinalPriceSpanStyled>
                        Total price:
                      </FinalPriceSpanStyled>
                      <FinalPriceSpanStyled>
                        {" "}
                         {orderedPrice} UAH
                      </FinalPriceSpanStyled>
                    </FinalPriceStyled>
                    <br />
                    <br />
                    <DialogActions>
                      {loading ? (
                        <CircularProgress color="success" />
                      ) : (
                        <>
                          <Button
                            style={{
                              height: 40,
                            }}
                            color="error"
                            onClick={handleClose}
                            variant="outlined"
                          >
                            cancel
                          </Button>
                          <Button
                            style={{
                              height: 40,
                            }}
                            color="success"
                            type="submit"
                            variant="outlined"
                          >
                            {("order")}
                          </Button>
                        </>
                      )}
                    </DialogActions>
                    <br />
                  </FormStyled>
                )}
              </Formik>
            </>
          )}
        </DialogContent>
      </Dialog>
    );
  };
  
  const DialogTitleStyled = styled(DialogTitle)({
    background: "linear-gradient(#bc581e,#e27b36)",
    fontFamily: "Monsterrat Light !important",
    fontSize: "xxx-large !important",
    textAlign: "center",
  });
  
  const LabelStyled = styled.label({
    width: "100%",
    display: "flex",
    alignItems: "center",
  });
  
  const FieldStyled = styled(Field)({
    fontFamily: "Monsterrat Medium",
    height: "50px",
    border: "none",
    borderBottom: "2px solid lightgrey",
    textIndent: "10px",
    width: "100%",
  });
  
  const FormStyled = styled(Form)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const FinalPriceStyled = styled.h2({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  });
  
  const FinalPriceSpanStyled = styled.span({
    display: "flex",
    alignItems: "center",
  });
  
  const OrderSuccessStyled = styled.h3({
    textAlign: "center",
  });
  
  export default CheckoutModal;