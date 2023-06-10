import { createHashRouter } from 'react-router-dom';
import { App } from "views/RootView"

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'questions/:questionId',
    element: <h2> Hello world </h2>
  }
]);
