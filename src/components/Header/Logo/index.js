import styled from "styled-components";
import LogoImg from "./../../../assets/Logo.png";

const Logo = () => {
  return (
    <LogoStyled src={LogoImg} alt="logo"/>
  );
};

const LogoStyled = styled.img({
  margin: "0 70px",
  width: "80px",
  height: "87px",
  textAlign: "center"
});

export default Logo;