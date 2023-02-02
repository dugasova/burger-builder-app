import styled from "styled-components";

const Loader =() => {
    return <LoaderStyled className="lds-hourglass" />
};

const LoaderStyled = styled.div({
    height: "50px",
});

export default Loader;