import { createBrowserRouter} from 'react-router-dom';
import { App } from "views/RootView"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'questions/:questionId',
    element: <h2> Hello world </h2>
  }
]);
