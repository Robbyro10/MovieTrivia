import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl mb-4">Movie Trivia</h1>
      <Link
        to="/category"
        className="bg-purple-600 px-3 py-1 rounded text-white hover:bg-purple-500"
      >
        SinglePlayer
      </Link>
    </div>
  );
};
