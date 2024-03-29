import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Button, Confetti, Question } from "../components";
import { questions } from "../data/questions";
import backAudio from "../assets/audio/back.wav";
import wonAudio from "../assets/audio/won.wav";
import loseAudio from "../assets/audio/lose.wav";
import tictac from "../assets/audio/tic-tac.mp3";

const tictacAudio = new Audio(tictac);
tictacAudio.loop = true;
tictacAudio.volume = 0.1;

export const GamePage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const max = questions.length;
  const firstQuestionIndex = getRandomInt(max);
  const selectedQuestion = questions[firstQuestionIndex];
  const numLives = Number(searchParams.get("lives"));
  const [question, setQuestion] = useState(selectedQuestion);
  const [repeatQuestions, setRepeatQuestions] = useState([firstQuestionIndex]);
  const [toCongratulate, setToCongratulate] = useState(false);
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [points, setPoints] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [time, setTime] = useState(15);
  const [lives, setLives] = useState( numLives || null );
  let timer = null;

  const getNewQuestion = () => {
    let random = null;
    if( repeatQuestions.length >= questions.length ) {
      finishGame();
    } else {
      do {
        random = getRandomInt(max);
      } while (repeatQuestions.includes(random));
    }
    setRepeatQuestions( prev => [...prev, random] )
    return random
  }

  const nextQuestion = () => {
    setShowAnswer(false);
    setQuestion( questions[getNewQuestion()] );
    setTime(15);
  };

  const handleAnswerSelected = (isCorrect) => {
    tictacAudio.pause();
    tictacAudio.currentTime = 0;
    new Audio(isCorrect ? wonAudio : loseAudio).play();

    if (isCorrect) {
      setPoints(points + time);
      setToCongratulate(true);
      setQuestionsAnsweredCorrectly(questionsAnsweredCorrectly + 1);
      setTimeout(() => {
        setToCongratulate(false);
      }, 3000);
    } else if ( lives !== null ) setLives( prev => prev - 1 )

    setQuestionsAnswered(questionsAnswered + 1);
    setShowAnswer(true);
    clearInterval(timer);
  };

  const finishGame = () => {
    navigate(
      `/end?points=${points}&answered=${questionsAnswered}&correctly=${questionsAnsweredCorrectly}`
    );
  };

  useEffect(() => {
    if ( lives !== null && lives <= 0 ) finishGame();
  }, [lives])

  useEffect(() => {
    timer = setInterval(() => {
      if (time > 0) setTime(time - 1);
      else {
        new Audio(loseAudio).play();
        clearInterval(timer);
        setQuestionsAnswered(prev => prev + 1);
        if ( lives !== null ) setLives( prev => prev - 1 );
        setShowAnswer(true);
        tictacAudio.pause();
        tictacAudio.currentTime = 0;
      }

      if( time <= 4 && time >=1 ) tictacAudio.play();

    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      {toCongratulate && <Confetti />}
      <div className="min-h-[85vh] pt-12 flex flex-col items-center gap-8 animate__animated animate__fadeIn">
        <p className="text-2xl gap-8 flex">
          <span>
            Points: {points} <i className="fa-solid fa-coins" style={{'color':'yellow'}}></i>
          </span>
          { lives !== null && <span> Lives: {lives} <i className="fa-solid fa-heart" style={{'color':'red'}}></i> </span> }
        </p>

        <Question
          time={time}
          title={question.title}
          options={question.options}
          showAnswer={showAnswer}
          onAction={handleAnswerSelected}
        />

        {showAnswer && (
          <div className="pt-8 grid grid-cols-2 gap-8 w-full sm:w-[55%] mx-auto pb-2">
            <span
              onClick={ () => { 
                new Audio(backAudio).play();
                finishGame ();
              }}
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
