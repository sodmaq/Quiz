import { Button } from "flowbite-react";
import { useQuiz } from "../contexts/quizContext";
function Next() {
  const { dispatch } = useQuiz();

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
