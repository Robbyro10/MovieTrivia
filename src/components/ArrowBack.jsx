
import { Link } from "react-router-dom";

export const ArrowBack = ({text, route}) => {
  return (
    <Link to={route}>
      <i className="text-2xl sm:text-4xl fa-sharp fa-solid fa-arrow-left"></i>
      {text}
    </Link>
  )
}