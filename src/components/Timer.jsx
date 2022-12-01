export const Timer = ({ time }) => {
  return (
    <div
      className={`flex items-center text-4xl my-5 justify-center gap-4 ${
        time <= 5 ? "timer-warning" : ""
      }`}
    >
      <i className="fa-regular fa-clock"></i>
      <p>{time}</p>
    </div>
  );
};
