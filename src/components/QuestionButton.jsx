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
        min-w-[125px] mt-5 text-xl p-5 rounded text-white relative
        w-full ${color} hover:shadow-[0_0_0_4px_rgb(var(--color-primary-600)/.5)]
        hover:contrast-125 transition ease-linear duration-200 ${
          isSelected ? "bg-primary-200 border-2" : ""
        }
        text-center ${
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
