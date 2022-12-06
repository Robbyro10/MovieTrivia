import { useState } from "react";
import noProfile from "../assets/no-profile.png";

export const Participant = (  ) => {
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min) + min)).toString();
  }
  const [ random, ] = useState(getRandomNumber(1000,9999))
  
  return (
    <div>
      <img className="rounded-full" src={noProfile} alt="profile" width="65" />
      <span>Guest-{random}</span>
    </div>
  )
}