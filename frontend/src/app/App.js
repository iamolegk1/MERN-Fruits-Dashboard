import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import { paths } from "./paths";
const { home, fruit } = paths;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<HomePage />} />
        <Route path={`${fruit}/:id`} element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
