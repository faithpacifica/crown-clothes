import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter bu degani routing uchun kerak boladi, ya'ni sahifalar orasida yurish uchun ,generic router leverages URL and keep track of the history of where the user is navigating trhough
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context.jsx";
import { CartProvider } from "./contexts/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider> 
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
