import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter bu degani routing uchun kerak boladi, ya'ni sahifalar orasida yurish uchun ,generic router leverages URL and keep track of the history of where the user is navigating trhough



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
