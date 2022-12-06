import { useState } from "react";

export const QuestionButton = ({
  text,
  color = "bg-primary-1000",
  isCorrect,
  showAnswer = false,
  onAction,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const clickAnswer = () => {
    if (showAnswer) return;
    onAction(isCorrect);
    setIsSelected(true);
  };

  return (
    <button
      onClick={clickAnswer}
      className={`
        min-w-[125px] text-xl p-4 rounded text-white relative text-center
        w-full ${color} hover:shadow-[0_0_0_4px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 transition ease-linear duration-200 border-2 border-transparent ${
          isSelected ? "bg-primary-800 border-white" : ""
        }
        ${
          showAnswer && isCorrect
            ? "question-button correct"
            : showAnswer && !isCorrect
            ? "question-button incorrect"
            : ""
        }
      `}
    >
      {text}
    </button>
  );
};
