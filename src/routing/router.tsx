import { createHashRouter } from 'react-router-dom';
import { Homepage } from 'views/Homepage';
import { Question } from 'views/Question';
import { Result } from 'views/Result';

enum ROUTES {
  ACTIVITY_ROUTE = 'activities/:activity_id',
  QUESTIONS_ROUTE = 'questions/:question_id',
  ROUND_ROUTE = 'rounds/:round_id',
  RESULTS_ROUTE = 'results/:activity_id'
}

export const router = createHashRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: `${ROUTES.ACTIVITY_ROUTE}/${ROUTES.QUESTIONS_ROUTE}`,
    element: <Question />
  },
  {
    path: `${ROUTES.ACTIVITY_ROUTE}/${ROUTES.ROUND_ROUTE}`,
    element: <Question />
  },
  {
    path: `${ROUTES.ACTIVITY_ROUTE}/${ROUTES.ROUND_ROUTE}/${ROUTES.QUESTIONS_ROUTE}`,
    element: <Question />
  },
  {
    path: ROUTES.RESULTS_ROUTE,
    element: <Result />
  }
]);
