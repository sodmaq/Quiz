import { Button } from "flowbite-react";
import { useQuiz } from "../contexts/quizContext";
function Next() {
  const { dispatch, answer, index, numbQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numbQuestions - 1) return null;

  return (
    <div>
      <Button
        className="mt-10 font-libre left-1/2 transform -translate-x-1/2"
        gradientDuoTone="purpleToBlue"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </Button>
    </div>
  );
}

export default Next;
