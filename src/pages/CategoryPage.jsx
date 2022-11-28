import { Category } from "../components/Category";

export const CategoryPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <div className="flex justify-between">
          <h1 className="flex-1/2 text-5xl font-bold mb-5 text-white">
            Choose Category!
          </h1>
          <button className="flex-1/2 text-4xl mb-5 pt-2 ">
            <i className="fa-solid fa-gear text-white hover:text-gray-100"></i>
          </button>
        </div>

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
