import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryPage, EndPage, GamePage, HomePage, WaitingRoomPage } from "../pages";
import { Navbar } from "../components";

export const AppRouter = () => {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="movie-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/end" element={<EndPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/waiting-room" element={<WaitingRoomPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};
