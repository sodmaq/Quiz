import { useQuiz } from "../contexts/quizContext";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="items-center">
      <div className="flex flex-col gap-4 mt-4 items-center justify-center">
        {question.options.map((option, index) => (
          <button
            className={`py-2 px-4 rounded-lg text-white transition-all 
          ${
            index === answer
              ? "bg-blue-500"
              : "bg-gray-500 hover:bg-gray-600 hover:scale-105"
          } 
          ${
            hasAnswered
              ? index === question.correctOption
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
              : ""
          }
          `}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
