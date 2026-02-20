import { createContext, useState, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};



// use State bilan yaratilgan edi
// import { useState, createContext, useEffect,useReducer } from "react";

// // Helper function to find inside existing array any items that exist that match the ID of this product
// const addCartItem = (cartItems, productToAdd) => {
//   // find if cartItem contains productToAdd
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );
//   //if found, increment quantity return new array with modified cartItems
//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }
//   // empty cart case->  add new cart item  first time
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);

//   // calculate cart count whenever cart items change
//   useEffect(() => {
//     const newCartCount = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );
//     setCartCount(newCartCount);
//   }, [cartItems]);

//   // calculate cart total whenever cart items change
//   useEffect(() => {
//     const newCartTotal = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price, 0
//     );
//     setCartTotal(newCartTotal);
//   }, [cartItems]);

//   const addItemToCart = (productToAdd) => {
//     // triggers whenever user clicks the Add To Cart button, what we are going to receive from ProductCard is going to 'productToAdd'
//     setCartItems(addCartItem(cartItems, productToAdd));
//   };

//   const removeItemFromCart = (cartItemToRemove) => {
//     // find the cart item to remove
//     const existingCartItem = cartItems.find(
//       (cartItem) => cartItem.id === cartItemToRemove.id
//     );

//     // if quantity is equal to 1, remove that item from the cart
//     if (existingCartItem.quantity === 1) {
//       return setCartItems(
//         cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
//       );
//     }
//     //return back cartitems with matching cart item with reduced quantity
//     setCartItems(
//       cartItems.map((cartItem) =>
//         cartItem.id === cartItemToRemove.id
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//       )
//     );
//   };

//   const clearItemFromCart = (cartItemToClear) => {
//     setCartItems(
//       cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
//     );
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemFromCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
