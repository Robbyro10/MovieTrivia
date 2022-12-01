import { Link } from "react-router-dom";

export const Button = ({
  text,
  route,
  size,
  color = "bg-primary-1000",
  onAction = () => {},
}) => {
  const handleClick = () => {
    new Audio("../src/assets/audio/select2.wav").play();
    setTimeout(() => {
      onAction();
    }, 50);
  };

  return (
    <Link
      to={route}
      onClick={handleClick}
      className={`
        min-w-[125px] block px-3 py-2 rounded text-white 
        w-1/2 ${color} hover:shadow-[0_0_0_2px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 transition ease-linear duration-100
        ${size}
        text-center
      `}
    >
      {text}
    </Link>
  );
};
