import styled from "styled-components"

const Button = ({action, ingredient, children}) => {
        return (
            <ButtonStyled data-action={action} data-ingredient={ingredient}>{children}</ButtonStyled>
        );
};

const ButtonStyled = styled.button({
        display: 'inline',
        width: "25px",
        height: "25px",
        cursor: "pointer",
        border: "none",
        borderRadius: "20%",
        backgroundColor: "#D2691E",
        margin: "20px",
        boxShadow: "2px 2px 2px #fff",
        hover: {backgroundColor: "#3e8e41"},
        active: {backgroundColor: "#3e8e41"},
        transform:" translate (4px)",
    
});

export default Button;