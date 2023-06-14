import { Container } from 'components/styled-components';
import { createHashRouter } from 'react-router-dom';
import { Homepage } from 'views/Homepage';
import { Question } from 'views/Question';

enum ROUTES {
  ACTIVITY_ROUTE = 'activities/:activity_id',
  QUESTIONS_ROUTE = 'questions/:question_id',
  ROUND_ROUTE = 'rounds/:round_id',
  RESULTS_ROUTE = 'results'
}

export const router = createHashRouter([
  {
    path: '/',
    element: (
      <Container>
        <Homepage />
      </Container>
    ),
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
    path: 'results',
    element: <h1>Preparation for results page</h1>
  }
]);
