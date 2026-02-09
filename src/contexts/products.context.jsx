
import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";
// import SHOP_DATA from '../shop-data.js' -> bu narsa faqat bir marta ishga tushishi kerak ekan, ya'ni firebase ga ma'lumotlarni faqat bir marta upload qilish kerak, shuning uchun bu kodni commentga oldim


// initialize our Products
export const ProductsContext = createContext({
  products: [],
  // setProducts: 
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

// useEffect(() => {
//     addCollectionAndDocuments('categories', SHOP_DATA); // we are adding our shop data to firebase only once when the component mounts , categories is the name of the collection
// }  -> bu narsa faqat bir marta ishga tushishi kerak ekan, ya'ni firebase ga ma'lumotlarni faqat bir marta upload qilish kerak, shuning uchun bu kodni commentga oldim

  const value = { products };

  return <ProductsContext.Provider value={value}>
    {children}
    </ProductsContext.Provider>;
};


