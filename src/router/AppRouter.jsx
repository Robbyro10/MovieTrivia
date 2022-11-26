import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryPage, EndPage, GamePage, HomePage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/end" element={<EndPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};
