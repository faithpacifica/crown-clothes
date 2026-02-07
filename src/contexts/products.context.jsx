
import { createContext, useState, useEffect } from "react";

import PRODUCTS from '../shop-data.json'


// initialize our Products
export const ProductContext = createContext({
  products: null,
  // setProducts: 
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return <ProductContext.Provider value={value}>
    {children}
    </ProductContext.Provider>;
};


