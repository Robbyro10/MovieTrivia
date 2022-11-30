import React from "react";
import { Button } from '../components';

export const EndPage = () => {
  return (
    <div className="text-center ">
      <h1 className="text-3xl py-8">End Page</h1>
      <div className="flex gap-6 flex-wrap justify-center ">
        <Button text="Main Menu" route="/" />
        <Button text="Play again" route="/game" />
        <Button text="Change Category" route="/category" />
      </div>
    </div>
  );
};
