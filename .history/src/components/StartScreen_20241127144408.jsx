import { Button } from "flowbite-react";
import { useQuiz } from "../contexts/quizContext";
function StartScreen() {
  const { numbQuestions, dispatch } = useQuiz();
  return (
    <div>
      <h2 className="text-3xl text-center font-libre mt-10">
        Welcome to Nigeria Quizz App
      </h2>
      <h3 className="text-2xl text-center font-libre">X number of questions</h3>
      <Button
        className="mt-10 font-libre left-1/2 transform -translate-x-1/2"
        gradientDuoTone="purpleToBlue"
      >
        Start
      </Button>
    </div>
  );
}

export default StartScreen;
