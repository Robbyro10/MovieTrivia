import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Confetti, Question } from "../components";
import { questions } from "../data/questions";
import backAudio from "../assets/audio/back.wav";
import wonAudio from "../assets/audio/won.wav";
import loseAudio from "../assets/audio/lose.wav";

export const GamePage = () => {
  const navigate = useNavigate();
  const repeatQuestions = [];
  //TODO: VALIDAR QUE NO SE REPITA EL NUMERO ALETORIO
  const max = questions.length;
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const selectedQuestion = questions[getRandomInt(max)];
  const [question, setQuestion] = useState(selectedQuestion);
  const [toCongratulate, setToCongratulate] = useState(false);
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] =
    useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [points, setPoints] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [time, setTime] = useState(15);
  let timer = null;

  const nextQuestion = () => {
    setShowAnswer(false);
    const random = getRandomInt(max);
    setQuestion(questions[random]);
    setTime(15);
  };

  const handleAnswerSelected = (isCorrect) => {
    new Audio(isCorrect ? wonAudio : loseAudio).play();

    if (isCorrect) {
      setPoints(points + time);
      setToCongratulate(true);
      setQuestionsAnsweredCorrectly(questionsAnsweredCorrectly + 1);
      setTimeout(() => {
        setToCongratulate(false);
      }, 3000);
    }

    setQuestionsAnswered(questionsAnswered + 1);
    setShowAnswer(true);
    clearInterval(timer);
  };

  const finishGame = () => {
    new Audio(backAudio).play();
    setTimeout(() => {
      navigate(
        `/end?points=${points}&answered=${questionsAnswered}&correctly=${questionsAnsweredCorrectly}`
      );
    }, 50);
  };

  useEffect(() => {
    timer = setInterval(() => {
      if (time > 0) setTime(time - 1);
      else setShowAnswer(true);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      {toCongratulate && <Confetti />}
      <div className="h-screen pt-12 flex flex-col items-center gap-8 animate__animated animate__fadeIn">
        <p className="text-2xl gap-4">
          Points: {points} <i className="fa-solid fa-coins"></i>{" "}
        </p>

        <Question
          time={time}
          title={question.title}
          options={question.options}
          showAnswer={showAnswer}
          onAction={handleAnswerSelected}
        />

        {showAnswer && (
          <div className="pt-8 grid grid-cols-2 gap-8 w-full sm:w-[55%] mx-auto">
            <span
              onClick={finishGame}
              className={`
                  min-w-[125px] px-3 py-2 rounded text-white border-2 block 
                  transparent hover:shadow-[0_0_0_4px_rgb(var(--color-primary-1200)/.5)]
                  hover:contrast-125 transition ease-linear duration-200
                  text-center cursor-pointer
                `}
            >
              Finish Game
            </span>
            <Button text="Next question" onAction={nextQuestion} />
          </div>
        )}
      </div>
    </>
  );
};
