import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/Button";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>

        <Button onClick={addProductToCart} buttonType="inverted">
          Add to card
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
