import { Container } from 'components/styled-components';
import { createHashRouter } from 'react-router-dom';
import { Homepage } from 'views/Homepage';
import { Question } from 'views/Question';

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
    path: 'activities/:activity_id/questions/:question_id',
    element: <Question />,
  },
  {
    path: 'results',
    element: <h1>Preparation for results page</h1>
  }
]);
