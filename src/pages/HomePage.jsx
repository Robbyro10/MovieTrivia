import React from "react";
import { Button } from '../components';
import logo from '../assets/movie.png';

export const HomePage = () => {
  return (
    <div className="text-center min-h-screen flex items-center gap-8 flex-col justify-center">
      <img src={logo} alt="logo" width="100"/>
      <h1 className="text-5xl">Movie Trivia</h1>
      <Button text="Single Player" route="/category" />
      <Button text="Multiplayer" route="/category" />
    </div>
  );
};
