import { createContext } from "react";

const quizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "data_received":
      return { ...state, questions: action.payload, status: "ready" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * 10,
      };
    case "new_answer":
      const question = state.questions.at(state.index);
}

function QuizProvider({ children }) {}

export { QuizProvider };
