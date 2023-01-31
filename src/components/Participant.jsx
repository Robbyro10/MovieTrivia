import { useState } from "react";
import noProfile from "../assets/no-profile.png";

export const Participant = ( {img, name} ) => {
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min) + min)).toString();
  }
  const [ random, ] = useState(getRandomNumber(1000,9999))
  
  return (
    <div>
      <img className="rounded-full object-cover w-[48px]" src={img || noProfile} alt="profile"/>
      <span>{ name || `Guest-${random}` }</span>
    </div>
  )
}