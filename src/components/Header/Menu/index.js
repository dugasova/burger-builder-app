import styled from "styled-components";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems = ["Home", "Orders", "Contact", "FAQ"];
  return (
    <MenuStyled>
      {menuItems.map((item) => (
        <MenuItem key={item}>{item}</MenuItem>
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.ul({
  display: "flex",
  listStyle: "none",
  justifyContent: "space-around",
  flexBasis: "18%",
  margin: "0 15px",
  color: "#3c1414"
});

export default Menu;