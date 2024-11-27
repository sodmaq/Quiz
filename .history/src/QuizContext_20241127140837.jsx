import { createContext } from "react";

const quizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
};
function QuizProvider({ children }) {}

export { QuizProvider };
