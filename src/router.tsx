import { createHashRouter } from 'react-router-dom';
import { Question, QuestionLoader } from 'views/Question';
import { App } from "views/RootView"

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'activities/:activity_id',
    element: <Question />,
    loader: QuestionLoader
  }
]);
