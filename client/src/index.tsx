import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, SignIn, SignUp } from './components/index';
import { InformationPage1, InformationPage2, InformationPage3, InformationPage4, InformationPage5, InformationPage6, InformationPage7 } from './components/userInformation/pages';
import { FinalPage } from './components/userInformation/pages/finalPage';
import { Profile } from './components/profile';

const infomationpageRoutes = [
  {
    path: '/sign-up/information-page1',
    element: <InformationPage1 />,
  },
  {
    path: '/sign-up/information-page2',
    element: <InformationPage2 />,
  },
  {
    path: '/sign-up/information-page3',
    element: <InformationPage3 />,
  },
  {
    path: '/sign-up/information-page4',
    element: <InformationPage4 />,
  },
  {
    path: '/sign-up/information-page5',
    element: <InformationPage5 />,
  },
  {
    path: '/sign-up/information-page6',
    element: <InformationPage6 />,
  },
  {
    path: '/sign-up/information-page7',
    element: <InformationPage7 />,
  },
  {
    path: '/sign-up/final-page',
    element: <FinalPage />,
  }
]

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
    element: <Profile />,
  },
  ...infomationpageRoutes.map((way) => (
    {
      path: way.path,
      element: way.element
    }
  ))
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
