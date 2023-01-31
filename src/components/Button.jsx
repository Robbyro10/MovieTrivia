import { Link } from "react-router-dom";
import audio from '../assets/audio/select2.wav'

const audioSelect = new Audio(audio);

export const Button = ({
  text,
  route,
  size,
  color = "bg-primary-1000",
  cssClases,
  onAction = () => {},
}) => {
  const handleClick = async () => {
    const audioSelect = new Audio(audio);
    audioSelect.volume = 0.2;
    await audioSelect.play();
    onAction();
  };

  return (
    <Link
      to={route}
      onClick={handleClick}
      className={`
        min-w-[125px] block p-3 rounded text-white 
        ${color} hover:shadow-[0_0_0_2px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 transition ease-linear duration-100
        ${size} text-center ${cssClases}
      `}
    >
      {text}
    </Link>
  );
};
