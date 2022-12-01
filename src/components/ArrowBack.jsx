
import { useNavigate } from "react-router-dom";

export const ArrowBack = ( { text, route } ) => {
  const navigate = useNavigate();

  const redirect = () => {
    new Audio('../src/assets/audio/back.wav').play();
    setTimeout(() => {
      navigate(route);
    }, 50);
  }
  
  return (
    <span onClick={redirect} className="cursor-pointer relative">
      <i className="text-2xl sm:text-4xl fa-sharp fa-solid fa-arrow-left"></i>
      {text}
    </span>
  )
}