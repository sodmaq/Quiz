import { Button } from "flowbite-react";
function StartScreen() {
  return (
    <div>
      <h2 className="text-3xl text-center font-libre mt-10">
        Welcome to Nigeria Quizz App
      </h2>
      <h3 className="text-2xl text-center font-libre">X number of questions</h3>

      <button className="bg-blue-600 text-white px-6 py-3.5 rounded font-libre">
        Start
      </button>
    </div>
  );
}

export default StartScreen;
