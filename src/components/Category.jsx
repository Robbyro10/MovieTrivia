import { Button } from "./Button";

export const Category = ({ title, description }) => {
  return (
    <div className="container bg-primary-800 border-2 p-6 shadow rounded-lg mb-3 max-w-3xl">
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="my-4 ">
        {
          description || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod animi vitae quam a impedit voluptate voluptates voluptatibus quidem ducimus adipisci ea, praesentium quae deserunt eius officiis consequatur nihil
          nisi.`
        }
      </p>
      <Button text="Select" route="/game" color="bg-primary-1200" />
    </div>
  );
};
