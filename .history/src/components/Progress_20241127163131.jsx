import { Progress as ProgressFlow } from "flowbite-react";
import { useQuiz } from "../contexts/quizContext";

function Progress() {
  const { index, numbQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <div className=" mt-10 mb-10 flex items-center justify-center">
      <div className="w-6/12">
        <ProgressFlow progress={ ((answer / numbQuestions) * 100} value={index + 1} total={numbQuestions} />
      </div>
    </div>
  );
}

export default Progress;
