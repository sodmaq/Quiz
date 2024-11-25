import { Button } from "flowbite-react";
function StartScreen() {
  return (
    <div>
      <h2 className="text-3xl text-center font-libre mt-10">
        Welcome to Nigeria Quizz App
      </h2>
      <h3 className="text-2xl text-center font-libre">X number of questions</h3>
      <Button className="mt-10" gradientDuoTone="purpleToBlue">
        Start
      </Button>
    </div>
  );
}

export default StartScreen;
