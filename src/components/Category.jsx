import { useNavigate } from "react-router-dom";

export const Category = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="container bg-white border p-2 shadow rounded mb-3 max-w-3xl">
      <h1 className="text-2xl font-medium mb-2">{title}</h1>
      <p className="mb-2 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod animi
        vitae quam a impedit voluptate voluptates voluptatibus quidem ducimus
        adipisci ea, praesentium quae deserunt eius officiis consequatur nihil
        nisi.
      </p>
      <button
        onClick={() => navigate("/game")}
        className="btn w-1/2 max-w-sm bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white font-medium drop-shadow-md"
      >
        Select
      </button>
    </div>
  );
};
