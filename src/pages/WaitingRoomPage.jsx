import React, { useState } from "react";
import { Button, ArrowBack, Participant} from "../components";
import selectAudio from "../assets/audio/select2.wav";
import wrongAudio from "../assets/audio/back.wav";

export const WaitingRoomPage = () => {
  const getRandomCode = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min) + min)).toString();
  }

  const copyToClipboard = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      new Audio(selectAudio).play();
    } catch (error) {
      new Audio(wrongAudio).play();
      setErrorMessage('Something wrong happened copying the code 😥');
    } finally {
      setIsCopied(true);
      setTimeout( () => {
        setIsCopied(false);
      }, 2000)
    }
  }

  const numberOfParticipants = getRandomCode(1, 6);
  const [participants] = useState(Array(Number(numberOfParticipants)).fill(undefined));
  const [code] = useState(getRandomCode(10000, 99999));
  const [isCopied, setIsCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  return (
    <div className="min-h-[85vh] sm:min-h-[100vh] flex justify-center items-center flex-col gap-8">

      {
        <div className=
          { `text-center min-w-[120px] p-4 fixed z-20 bottom-6
            bg-primary-1200 border-2 border-primary-200 rounded-lg
            pointer-events-none toast ${isCopied ? 'showToast' : ''}`
          }
        >
          {errorMessage || 'Copied!'}
        </div>
      }

      <div className="mr-auto">
        <ArrowBack route="/"/>
      </div>
      <div className="w-full max-w-[550px] bg-primary-1000 p-8 text-center animate__animated animate__fadeIn rounded-lg">
        <p className="text-xl md:text-3xl font-bold mb-8">
          Here is the code of the room. share with your friends to play and share together
        </p>
        <p 
          className="flex items-center justify-center gap-4 text-3xl p-4 cursor-pointer border-2 w-max mx-auto rounded-md active:bg-white active:text-primary-1000 transition duration-200" onClick={ () => copyToClipboard(code) }
        >
          {code} <i className="fa-solid fa-copy"></i>{" "}
        </p>
        <p className="text-sm mb-6">Press to copy</p>

        <div className="flex flex-wrap gap-8 text-sm mb-6">
          {
            participants.map( (_, index) => <Participant key={index}/>)
          }
        </div>

        <div className="flex justify-center">
          <Button
            text="Play"
            color="bg-primary-400"
            route="/game"
          />
        </div>
      </div>
    </div>
  );
};
