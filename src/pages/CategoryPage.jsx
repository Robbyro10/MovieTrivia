import React from "react";
import { Button } from '../components';

export const CategoryPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Choose Category</h1>
      <Button text="Start Game" route="/game" />
    </div>
  );
};
