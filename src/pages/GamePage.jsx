import React from "react";
import { Link } from "react-router-dom";

export const GamePage = () => {
  return (
    <>
      <h1 className="text-center text-3xl">Game Page</h1>
      <Link
        to="/end"
        className="bg-purple-600 px-3 py-1 rounded text-white hover:bg-purple-500"
      >
        Finish Game
      </Link>
    </>
  );
};
