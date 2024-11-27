import { Button } from "flowbite-react";
function Next() {
  const { dispatch } = useQuiz();
  return (
    <div>
      <Button
        className="mt-10 font-libre left-1/2 transform -translate-x-1/2"
        gradientDuoTone="purpleToBlue"
      >
        Next
      </Button>
    </div>
  );
}

export default Next;
