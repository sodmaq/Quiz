import { createContext } from "react";

const quizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};
function QuizProvider({ children }) {}

export { QuizProvider };
