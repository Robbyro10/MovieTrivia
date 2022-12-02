import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Category = ({ title, description }) => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game");
  };

  return (
    <div className="container bg-primary-1000 p-6 shadow rounded-lg mb-3 max-w-3xl">
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="my-4 ">
        {description ||
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod animi vitae quam a impedit voluptate voluptates voluptatibus quidem ducimus adipisci ea, praesentium quae deserunt eius officiis consequatur nihil
          nisi.`}
      </p>
      <Button text="Select" onAction={goToGame} color="bg-primary-400" />
    </div>
  );
};
