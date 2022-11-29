import { Button } from "./Button";
import { Timer } from "./Timer";

export const Question = ({title, options, time}) => {
  return (
    <div className="flex items-center justify-center gap-8 flex-col">
      <p className="text-2xl"> { title } </p>
      <Timer time={time}/>
      <div className="grid grid-cols-2 gap-4">
      { options.map( op => <Button key={op.title} text={op.title}/> ) }
      </div>
    </div>
  );
};

