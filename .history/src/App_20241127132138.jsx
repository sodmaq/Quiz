import Error from "./components/Error";
import Header from "./components/Header";
import Progress from "./components/Progress";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <>
      <Header />
      <StartScreen />
      {/* <Progress /> */}
      <Error />
    </>
  );
}

export default App;
