import React, { useState, useEffect } from "react";
import { Button } from '../components';
import { questions } from '../data/questions';
import { Question } from "../components"; 

export const GamePage = () => {
  //TODO: VALIDAR QUE NO SE REPITA EL NUMERO ALETORIO
  //TODO: HACER USO DE USESTATE PARA EL MANEJO DEL ESTADO
  const max = questions.length - 1;
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const selectedQuestion = questions[getRandomInt(max)];
  const [question, setQuestion] = useState(selectedQuestion);
  const [time, setTime] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      if ( time > 0 ) setTime( time - 1);
      else setTime( 15 );
    }, 1000);
    return () => clearTimeout(timer);
  });
  
  return (
    <div className="movie-container pt-12">
      <Question time={time} title={question.title} options={question.options}/>
      <Button text="Finish Game" route="/end" />
    </div>
  );
};
