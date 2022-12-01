import { ArrowBack, Category, Select } from "../components";
import { configurationHTML } from "../data/configuration.html";

export const CategoryPage = () => {
  const openConfiguration = () => {
    new Audio("../src/assets/audio/back.wav").play();
    Swal.fire({
      title: "<strong>Configuration</strong>",
      icon: "info",
      html: configurationHTML,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      customClass: {
        confirmButton: `class="min-w-[125px] block px-3 py-2 rounded text-white 
        w-full bg-primary-1000 hover:shadow-[0_0_0_4px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 transition ease-linear duration-200
        text-center`,
        cancelButton: `class="min-w-[125px] block px-3 py-2 rounded text-white 
        w-full bg-primary-1000 hover:shadow-[0_0_0_4px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 transition ease-linear duration-200
        text-center`,
      },
      buttonsStyling: false,
      confirmButtonText: "Save",
      confirmButtonAriaLabel: "Save",
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "Cancel",
    }).then(() => new Audio("../src/assets/audio/back.wav").play());
  };

  return (
    <div className="movie-container pt-8 animate__animated animate__fadeIn">
      <ArrowBack route="/" />
      <div className="pt-4 flex justify-center">
        <div className="flex-col">
          <div className="flex justify-between items-center">
            <h1 className="flex-1/2 text-3xl font-bold mb-5 text-white sm:text-4xl">
              Choose Category!
            </h1>
            <button className="flex-1/2 text-2xl sm:text-4xl mb-5 pt-2 ">
              <i
                onClick={openConfiguration}
                className="fa-solid fa-gear text-white hover:text-gray-100"
              ></i>
            </button>
          </div>

          <Select
            options={[
              "Fantasy",
              "Horror",
              "Love",
              "Thriller",
              "Disney",
              "Mix!",
            ]}
          />

          <Category title={"Who Said That?"} />
          <Category title={"Why are we Here?"} />
          <Category title={"Obama Care?"} />
        </div>
      </div>
    </div>
  );
};
