import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, SignIn, SignUp } from './components/index';
import { UserHomePage } from './components/userHomePage';
import { UserForm } from './components/userInformation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/home-page/:id',
    element: <UserHomePage />,
  },  {
    path: '/user-information',
    element: <UserForm/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
