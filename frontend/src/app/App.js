import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";
import SellPage from "../pages/SellPage";
import { paths } from "./paths";

const { home, fruit, sell, order } = paths;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<HomePage />} />
        <Route path={`${fruit}/:id`} element={<ProductPage />} />
        <Route path={sell} element={<SellPage />} />
        <Route path={order} element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
