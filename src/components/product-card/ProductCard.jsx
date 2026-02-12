import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles.jsx";

const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
