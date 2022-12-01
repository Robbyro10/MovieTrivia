import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import logo from "../assets/movie.png";

export const HomePage = () => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate("/category");
  };

  return (
    <div className="text-center min-h-screen flex items-center gap-8 flex-col justify-center animate__animated animate__fadeInUp">
      <img src={logo} alt="logo" width="100" />
      <h1 className="text-5xl resize">Movie Trivia</h1>
      <Button text="Single Player" onAction={goToCategory} />
      <Button text="Multiplayer" onAction={goToCategory} />

      <br />
    </div>
  );
};
