import { Category } from "../components/Category";

export const CategoryPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <h1 className="text-4xl font-bold mb-5 text-white">Choose Category!</h1>

        <select className="mb-3 w-1/4 rounded">
          <option>Fantasy</option>
          <option>Horror</option>
          <option>Love</option>
          <option>Thriller</option>
        </select>

        <Category title={"Who Said That?"} />
        <Category title={"Why are we Here?"} />
        <Category title={"Obama Care?"} />
      </div>
    </div>
  );
};
