import { useQuiz } from "../contexts/quizContext";

function Options() {
  const { dispatch, answer } = useQuiz();
  return (
    <div className="flex flex-wrap gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to Blue
      </Button>
    </div>
  );
}

export default Options;
