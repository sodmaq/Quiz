import { useQuiz } from "../contexts/quizContext";

function Options() {
  const { dispatch, answer } = useQuiz();
  return <div>
    <button
      className="mt-10 font-libre left-1/2 transform -translate-x-1/2"
      onClick={() => dispatch({ type: "newAnswer", payload: "a" })}
    >
      A
    </button>
    <button
      className="mt-10 font-libre left-1/2 transform -translate-x-1/2"
      onClick={() => dispatch({ type: "newAnswer", payload: "b" })}
    >
      B
    </button>
    <button
      className="mt-10 font-libre left-1/2 transform -translate-x-1/2"
      onClick={() => dispatch({ type: "newAnswer", payload: "c" })}
    >
      C
    </button>
    <button
      className="mt-10 font-libre left-1/2 transform -translate-x-1/2"
      onClick={() => dispatch({ type: "newAnswer", payload: "d" })}
    >
  </div>;
}

export default Options;
