import { useQuiz } from "../contexts/quizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];

  return (
    <div className=" w-6/12">
      <h4 className="font-libre text-2xl text-center"> {question.question}</h4>
    </div>
  );
}

export default Question;
