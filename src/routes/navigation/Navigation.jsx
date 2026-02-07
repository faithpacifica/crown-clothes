import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.scss";
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
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          <CartIcon />
        </div>
       {isCartOpen && <CartDropdown />} 
       {/* //components are truthy values */}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
