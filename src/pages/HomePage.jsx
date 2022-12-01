import { useNavigate } from "react-router-dom";
import logo from "../assets/movie.png";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    new Audio("../src/assets/audio/select2.wav").play();
    setTimeout(() => {
      onAction();
    }, 50);
    navigate("/category");
  };

  return (
    <div className="text-center flex items-center gap-8 flex-col justify-center animate__animated animate__fadeIn">
      <h1 className="text-8xl my-10 font-semibold">Movie Trivia</h1>
      <img
        src={logo}
        alt="logo"
        className="mb-4 mt-4 w-1/3 drop-shadow-[0px_0px_5px_rgba(0,0,0,0.5)] resize"
      />
      <div className="flex-col mt-20">
        <button
          onClick={handleClick}
          className="bg-primary-1000 p-5 px-7 rounded-lg text-6xl mr-20 hover:shadow-[0_0_0_2px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 hover:-translate-y-1 transition ease-linear duration-100"
        >
          <i className="fa-solid fa-user"></i>
        </button>
        <button
          onClick={handleClick}
          className="bg-primary-1000 p-5 rounded-lg text-6xl hover:shadow-[0_0_0_2px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 transition ease-linear duration-100 hover:-translate-y-1 "
        >
          <i className="fa-solid fa-users"></i>
        </button>
      </div>
      <br />
    </div>
  );
};
