import Header from "./components/Header";
import Progress from "./components/Progress";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import { useQuiz } from "./QuizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div>
      <Header />
      <StartScreen />
      <Progress />
      <Question />
    </div>
  );
}

export default App;
