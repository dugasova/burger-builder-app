import React, { useState, useEffect} from "react";
import styled  from "styled-components";
import Loader from "../../components/Loader";
import axios from "axios";
import Popover from '../../components/Popover';

const Orders = () => {
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     (async () =>
        await axios.get("https://burger-api-xcwp.onrender.com/orders").then((result) => {
            setOrders(result.data)
            setLoading(false);
        }).catch( (err) => {
            console.error(err.message)
        })
     )()
    }, [])

    return (
        <OrdersStyled>
        <h1 style={{ color: "#3c1414", marginBottom: "20px"}}>Orders</h1>

            {loading ?  (<Loader />) : (
                orders.map((order) => {
                    if (!order.orderName || !order.orderPrice || !order.orderPhone || !order.orderProducts) {
                        return undefined
                    }  
                    
                    return (
                        <SingleOrderStyled key={order._id}>
                            <div>{order.orderName + "  " + order.orderPhone + "  " +order.orderPrice}</div>
                            <Popover>
                                <p>Name: {order.orderName}</p>
                                <p>Phone: {order.orderPhone}</p>
                                <p> Address: {order.orderAddress}</p>
                                <p>Total price: {order.orderPrice}</p>
                                <p>Ordered product:</p>
                                {Object.entries(order.orderProducts).filter((product) => product !== undefined).map((product, index) => {
                                    return (<div key={index}>{product[0]} - {product[1]}</div>
                                    )
                                })}
                                </Popover>
                        </SingleOrderStyled>
                    )
                })
            )}
        </OrdersStyled>
    );
};

const OrdersStyled = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    marginLeft: "50px"
});

const SingleOrderStyled = styled.div({
    color: "#3c1414",
    fontSize: "2em",
})

export default Orders;