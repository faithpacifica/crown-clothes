import { useContext } from "react";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.scss";
import { CartContext } from "../../contexts/cart-context";
import { useNavigate } from "react-router-dom";

// TODO:refreshda basketichidagi narsalar yuqolyapti
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
const navigate = useNavigate()

const goToCheckoutHandler = () => {
  navigate('/checkout')
} 

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler} >Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
