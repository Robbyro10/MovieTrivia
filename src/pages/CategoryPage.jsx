import React from "react";
import { Link } from "react-router-dom";

export const CategoryPage = () => {
  return (
    <>
      <h1 className="text-center text-3xl">Choose Category</h1>
      <Link
        to="/game"
        className="bg-purple-600 px-3 py-1 rounded text-white hover:bg-purple-500"
      >
        Start Game
      </Link>
    </>
  );
};
