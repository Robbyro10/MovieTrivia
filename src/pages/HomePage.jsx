import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-light text-white">Movie Trivia</h1>

      <Link
        to="/category"
        className="bg-purple-600 btn text-white hover:bg-purple-500 relative"
      >
        SinglePlayer
      </Link>
      <Link
        to="/category"
        className="bg-purple-600 btn text-white hover:bg-purple-500 relative"
      >
        MultiPlayer
      </Link>
    </div>
  );
};
