import styled from "styled-components";

const Loader =() => {
    return <LoaderStyled className="lds-hourglass"></LoaderStyled>
};

const LoaderStyled = styled.div({
    height: "50px",
});

export default Loader;