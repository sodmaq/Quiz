import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Man from "./components/Man";
import Progress from "./components/Progress";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import { useQuiz } from "./QuizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div>
      <Header />
      <Man>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
      </Man>
    </div>
  );
}

export default App;
