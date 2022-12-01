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
    <div className="text-center animate__animated animate__fadeIn">
      <p className="text-5xl py-8">{message}</p>
      <p className="flex items-center justify-center gap-4 text-4xl py-8">
        Points: {points} <i className="fa-solid fa-coins"></i>{" "}
      </p>
      <p className="text-xl pb-2">You answered correctly {correctly}</p>
      <p className="text-xl pb-8">
        Total questions {answered > 1 ? "were" : "was"} {answered}
      </p>

      <div className="flex gap-6 flex-wrap justify-center ">
        <Button text="Main Menu" route="/" />
        <Button text="Play again" route="/game" />
        <Button text="Change Category" route="/category" />
      </div>
    </div>
  );
};
