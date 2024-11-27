import { createContext } from "react";

const quizContext = createContext();

const initialState = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  showResult: false,
};
function QuizProvider({ children }) {}

export { QuizProvider };
