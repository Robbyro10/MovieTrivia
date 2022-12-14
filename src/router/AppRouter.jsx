import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryPage, EndPage, GamePage, HomePage, WaitingRoomPage } from "../pages";

export const AppRouter = () => {
  return (
    <div className="movie-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/end" element={<EndPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/waiting-room" element={<WaitingRoomPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
