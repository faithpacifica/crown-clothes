import { useContext } from "react";
import "./Checkout.scss";

import { CartContext } from "../../contexts/cart-context";

const Checkout = () => {
  const { cartItems,addItemToCart ,removeItemFromCart} = useContext(CartContext);

  return (
    <div>
      <div className="checkout-container">
        {cartItems.map((item) => {
          const { id, name, quantity} = item;
          return (
            <div key={id} className="checkout-item-container">
              <h3>{name}</h3>
              <p>{quantity}</p>
              <span onClick={()=>removeItemFromCart(item)}>decrement</span> <br />
              <span onClick={()=>addItemToCart(item)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
