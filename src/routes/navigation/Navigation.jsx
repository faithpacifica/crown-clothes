import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink, } from "./Navigation.styles.jsx";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/cart-context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser, "currentUser");

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}

          <NavLink to="/shop">
            SHOP
          </NavLink>

          <CartIcon />
        </NavLinks>
       {isCartOpen && <CartDropdown />} 
       {/* //components are truthy values */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
