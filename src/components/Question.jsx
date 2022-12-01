import { QuestionButton } from "./QuestionButton";
import { Timer } from "./Timer";

export const Question = ({
  title,
  options,
  time,
  showAnswer = false,
  onAction,
}) => {
  return (
    <div className="flex items-center justify-center gap-8 flex-col">
      <p className="text-4xl text-center"> {title} </p>
      <Timer time={time} />
      <div className="grid grid-cols-2 gap-9 mb-6">
        {options.map((op) => (
          <QuestionButton
            onAction={onAction}
            key={op.title}
            text={op.title}
            showAnswer={showAnswer}
            isCorrect={op.isCorrect}
          />
        ))}
      </div>
    </div>
  );
};
