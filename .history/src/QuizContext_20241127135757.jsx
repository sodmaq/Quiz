import { createContext } from "react";

const quizContext = createContext();

function QuizProvider({ children }) {
  return <quizContext.Provider value="">{children}</quizContext.Provider>;
}
