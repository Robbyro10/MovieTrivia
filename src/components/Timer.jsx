
export const Timer = ({time}) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${ time <= 5 ? 'timer-warning' : ''}`}>
      <i className="text-2xl sm:text-4xl fa-regular fa-clock"></i>
      <p className="text-2xl sm:text-4xl">{time}</p>
    </div>
  );
};



