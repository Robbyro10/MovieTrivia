import React from "react";
import { Button } from '../components';

export const EndPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-3">End Page</h1>
      <Button text="Main Menu" route="/" />
      <Button text="Play again" route="/game" />
      <Button text="Change Category" route="/category" />
    </div>
  );
};
