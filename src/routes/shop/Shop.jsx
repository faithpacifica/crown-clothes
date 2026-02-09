import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h3 className="products-title">{title}</h3>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
