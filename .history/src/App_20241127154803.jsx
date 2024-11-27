import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Man from "./components/Man";
import Next from "./components/Next";
import Progress from "./components/Progress";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import { useQuiz } from "./contexts/quizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div className="flex flex-col items-center bg-green-500">
      <Header />
      <Man>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Next />
            </Footer>
          </>
        )}
      </Man>
    </div>
  );
}

export default App;
