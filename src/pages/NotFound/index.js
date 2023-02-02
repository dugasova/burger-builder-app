import React from "react";
import styled from "styled-components";

const NotFound = () => {
    
    return (
    <NotFoundStyled> Something went wrong </NotFoundStyled>
    )
};
const NotFoundStyled = styled.div({
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    fontSize: "50px",
    fontWeight: "900",
    color: "#3c1414",
    marginTop: "100px",
})

export default NotFound;