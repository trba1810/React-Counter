import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Compontents/Header";
import Counter from "./Compontents/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Counter />
  </div>
);
