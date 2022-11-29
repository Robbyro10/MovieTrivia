import React from "react";
import { Button } from '../components';

export const GamePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Game Page</h1>
      <Button text="Finish Game" route="/end" />
    </div>
  );
};
