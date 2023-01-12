import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuItem = ({ children }) => {

  return ( 
  <MenuItemStyled>
    <NavLink className={({ isActive }) => isActive ?  "menu_item_active" : undefined } to={children === "Home" ? "/" : children.toLowerCase()}>
        {children.toLowerCase()}
    </NavLink>
  </MenuItemStyled>
  );
};

const MenuItemStyled = styled.li({
  marginLeft: "10px",
  cursor: "pointer",
  height: "37px",
  textAlign: "center",
  textDecoration: "none"
});


export default MenuItem;