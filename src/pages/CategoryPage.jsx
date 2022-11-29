import { ArrowBack, Category, Select } from "../components";

export const CategoryPage = () => {
  return (
    <div className="movie-container pt-8">
      <ArrowBack route="/" />
      <div className="pt-4 flex justify-center">
        <div className="flex-col">
          <div className="flex justify-between items-center">
            <h1 className="flex-1/2 text-3xl font-bold mb-5 text-white sm:text-4xl">
              Choose Category!
            </h1>
            <button className="flex-1/2 text-2xl sm:text-4xl mb-5 pt-2 ">
              <i className="fa-solid fa-gear text-white hover:text-gray-100"></i>
            </button>
          </div>

          <Select options={['Fantasy','Horror','Love','Thriller','Disney','Mix!']}/>

          <Category title={"Who Said That?"} />
          <Category title={"Why are we Here?"} />
          <Category title={"Obama Care?"} />
        </div>
      </div>
    </div>

  );
};
