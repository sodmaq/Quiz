import { useQuiz } from "../contexts/quizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg font-semibold">
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="text-gray-600">(Highscore: {highscore} points)</p>
      <button
        className="px-4 py-2 mt-4 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

export default FinishScreen;
