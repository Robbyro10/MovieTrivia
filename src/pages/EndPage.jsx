import React from "react";
import { Link } from "react-router-dom";

export const EndPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl mb-3">End Page</h1>
      <Link
        to="/"
        className="mr-2 bg-purple-600 px-3 py-1 rounded text-white hover:bg-purple-500"
      >
        Main Menu
      </Link>
      <Link
        to="/game"
        className="mr-2 bg-purple-600 px-3 py-1 rounded text-white hover:bg-purple-500"
      >
        Play Again
      </Link>
      <Link
        to="/category"
        className="bg-purple-600 px-3 py-1 rounded text-white hover:bg-purple-500"
      >
        Change Category
      </Link>
    </div>
  );
};
