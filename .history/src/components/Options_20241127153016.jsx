import { useQuiz } from "../contexts/quizContext";
import { Button } from "flowbite-react";
function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  return (
    <div className="flex flex-wrap gap-2">
      {question.options.map((option) => (
        <Button
          key={option}
          gradientDuoTone="purpleToBlue"
          onClick={() => dispatch({ type: "newAnswer", payload: option })}
          active={answer === option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default Options;
