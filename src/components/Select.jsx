
export const Select = ({options = []}) => {
  return (
    <div className="inline-block relative w-full mb-4">
      <select className="block cursor-pointer border-2 hover:border-primary-200 hover:shadow-[0_0_0_4px_rgb(var(--color-primary-600)/.5) transition ease-linear duration-200 w-full rounded-lg appearance-none bg-primary-1200 p-4 text-xl shadow leading-tight outline-none ">
        { options.map( op => <option> {`${op}`} </option>) }
      </select>
      
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
};