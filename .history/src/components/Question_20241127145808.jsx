function Question() {
  const { questions, index } = useQuiz();
  return (
    <div className=" w-6/12">
      <h4 className="font-libre text-2xl text-center"> what is a noun?</h4>
      {/* <Options question={question} /> */}
    </div>
  );
}

export default Question;
