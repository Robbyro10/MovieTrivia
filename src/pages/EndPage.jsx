import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components";

export const EndPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const points = searchParams.get("points");
  const answered = searchParams.get("answered");
  const correctly = searchParams.get("correctly");
  const [message, setMessage] = useState("");

  const scoreMessages = {
    10: "Uhm, you tried...",
    20: "Not so bad...",
    30: "You're improving",
    40: "Good!",
    60: "Excellent!",
    80: "Congratulations!",
    100: "Wow! Awewsome!",
    120: "You are the best!",
  };

  useEffect(() => {
    setMessage(showMessage());
  }, []);

  const showMessage = () => {
    for (const [point, answer] of Object.entries(scoreMessages)) {
      if (Number(points) <= Number(point)) return answer;
    }
    return Object.values(scoreMessages).at(-1);
  };

  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-[550px] bg-primary-1000 bg text-center animate__animated animate__fadeIn rounded-lg">
        <p className="text-3xl md:text-5xl font-bold px-4 py-8">{message}</p>
        <p className="flex items-center justify-center gap-4 text-3xl py-8">
          Points: {points} <i className="fa-solid fa-coins"></i>{" "}
        </p>
        <p className="text-xl mb-3">Questions answered:</p>
        <h1 className="text-3xl font-bold">{answered}</h1>
        <p className="text-xl py-4">Questions answered correctly:</p>
        <h1 className="text-3xl font-bold ">{correctly}</h1>

        <div className="flex gap-6 flex-wrap justify-center mb-3 p-7">
          <Button text="Main Menu" color="bg-primary-400" route="/" />
          <Button text="Play again" color="bg-primary-400" route="/game" />
          <Button
            text="Change Category"
            color="bg-primary-400"
            route="/category"
          />
        </div>
      </div>
    </div>
  );
};
