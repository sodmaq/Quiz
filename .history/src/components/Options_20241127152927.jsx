import { useQuiz } from "../contexts/quizContext";
import { Button } from "flowbite-react";
function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  return (
    <div className="flex flex-wrap gap-2">
      {question.option.map((option) => (
        <Button
          key={option}
          color={answer === option ? "green" : "gray"}
          onClick={() => dispatch({ type: "newAnswer", payload: option })}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default Options;
