import { Link } from "react-router-dom";

export const Button = ({text, route, color = 'bg-primary-1000'}) => {
  return (
    <Link
      to={route}
      className={`
        min-w-[125px] block px-3 py-2 rounded text-white 
        w-full sm:w-max ${color} hover:shadow-[0_0_0_4px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 transition ease-linear duration-200
        text-center
      `}
    >
      {text}
    </Link>
  )
}