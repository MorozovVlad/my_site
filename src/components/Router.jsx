import React from "react";
import App from "../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarPage from "./carPage/CarPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/home" />
        <Route path="*" element={<p>Page not found</p>} />
        <Route path="/car/:id" element={<CarPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
