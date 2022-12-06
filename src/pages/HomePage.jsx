import { useNavigate } from "react-router-dom";
import logo from "../assets/movie.png";
import audio from "../assets/audio/select2.wav";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = ( { isMultiplayer = false } ) => {
    new Audio(audio).play();
    if (isMultiplayer) navigate('/waiting-room');
    else navigate('/category');
  };

  return (
    <div className="min-h-[90vh] text-center flex items-center gap-8 flex-col justify-between animate__animated animate__fadeIn py-10">
      <h1 className="cursive text-6xl lg:text-7xl font-semibold">Movie Trivia</h1>
      <img
        src={logo}
        alt="logo"
        className="w-[80%] max-w-[180px] drop-shadow-[0px_0px_5px_rgba(0,0,0,0.5)] resize"
      />
      <div className="flex gap-8 lg:gap-16">
        <button
          onClick={ handleClick }
          className="
            flex flex-col items-center sm:flex-row gap-2 sm:min-w-[200px]
            bg-primary-1000 p-5 px-7 rounded-lg text-xl 
            hover:shadow-[0_0_0_2px_rgb(var(--color-primary-600)/.5)] 
            hover:contrast-125 hover:-translate-y-1 transition
            ease-linear duration-100
          "
        >
          <i className="fa-solid fa-user"></i>
          <span>Single player</span>

        </button>
        <button
          onClick={ () => handleClick({isMultiplayer: true}) }
          className="flex flex-col items-center sm:flex-row gap-2 sm:min-w-[200px] bg-primary-1000 py-5 px-7 rounded-lg text-xl
          hover:shadow-[0_0_0_2px_rgb(var(--color-primary-600)/.5)] hover:contrast-125 hover:-translate-y-1 
          transition ease-linear duration-100"
        >
          <i className="fa-solid fa-users"></i>
          <span>Multiplayer</span>
        </button>
      </div>
    </div>
  );
};
