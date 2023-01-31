import { useEffect, useState } from "react";
import audioTune from "../assets/audio/init.mp3";

const audioSound = new Audio(audioTune);
audioSound.loop = true;
audioSound.volume = 0.25;

export const Navbar = () => {
  const [musicStatus, setMusicStatus] = useState(true);
  useEffect(() => {
    audioSound.load();
  }, []);

  const startMusicAudio = async () => {
    if (musicStatus) audioSound.pause();
    else {
      try {
        await audioSound.play();
      } catch (error) {
        console.log("Error al reproducir el audio...", error);
      }
    }
  };

  useEffect(() => {
    startMusicAudio();
  }, [musicStatus]);

  return (
    <div className="flex items-center pt-4 flex-col gap-1 animate__animated animate__fadeIn">
      <i
        className={`fa-solid text-2xl lg:text-4xl cursor-pointer ${
          !musicStatus ? "fa-volume-xmark" : "fa-music"
        }`}
        onClick={() =>
          setMusicStatus((prev) => {
            return !prev;
          })
        }
      ></i>
      <span> {!musicStatus ? "Stop music" : "Play music"} </span>
    </div>
  );
}

