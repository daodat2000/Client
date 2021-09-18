import { createContext, useReducer, useEffect, useState } from 'react';
import { authReducer } from '../reducers/authReducer';
import axios from 'axios';
import setAuthToken from '../uitls/setAuthToken';
export const QuizContext = createContext();
const { REACT_APP_SERVER_URL } = process.env;
const QuizContextProvider = ({ children }) => {
  const [quizState, setQuizState] = useState({
    quizs: [{ Header: 'AbortController', Content: 'abc' }],
  });
  console.log('b');
  //ContextData
  const QuizContextData = { quizState };

  //return provider
  return (
    <QuizContext.Provider value={QuizContextData}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
