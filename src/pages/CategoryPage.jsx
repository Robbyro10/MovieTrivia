import { ArrowBack, Category, Select } from "../components";
import { configurationHTML } from "../data/configuration.html";
import audio from '../assets/audio/back.wav';

export const CategoryPage = () => {
  const openConfiguration = () => {
    new Audio(audio).play();
    Swal.fire({
      title: "<strong>Configuration</strong>",
      icon: "info",
      html: configurationHTML,
      showCloseButton: true,
      showCancelButton: true,
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
    }).then(() => new Audio(audio).play());
  };

  return (
    <div className="pt-8 animate__animated animate__fadeIn">
      <ArrowBack route="/" />
      <div className="pt-4 flex justify-center">
        <div className="flex-col">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">
              Choose a Category!
            </h1>
            <button className="text-2xl sm:text-4xl mb-5 pt-2 ">
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

          <Category 
            title={"Who Said That?"}
            description={`
              Movie quotes will show up and you must identify the character that said the quoute!
            `}
          />
          <Category 
            title={"Wich movie?"} 
            description={`
              Clues or information about movie wil be provided, can you identify it?
            `}
          />
          <Category 
            title={"Cool fact!"}
            description={`
              You will be asked for specific details about a certain movies, this will truly test your knowledge. Try it!
            `}
          />
          <Category 
            title={"Three lives!"}
            description={`
              You will have three attempts to see how far you can go. Are you ready?
            `}
            routeToGame={"/game?lives=3"}
          />
        </div>
      </div>
    </div>
  );
};
