import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, SignIn, SignUp, SettingsPage } from './components/index';
import { InformationPage1, UserFieldsPage, UserSkillsPage, UserEnglishLevelPage, UserEducationPage, UserExperiencePage, AboutUserPage } from './components/userInformation/pages';
import { FinalPage } from './components/userInformation/pages/finalPage';
import { Profile } from './components/profile';
import { AddProjectPage } from './components/profile/pages/addProjectPage';

const infomationpageRoutes = [
  {
    path: '/sign-up/information-page1',
    element: <InformationPage1 />,
  },
  {
    path: '/sign-up/fields',
    element: <UserFieldsPage />,
  },
  {
    path: '/sign-up/skills',
    element: <UserSkillsPage />,
  },
  {
    path: '/sign-up/english-level',
    element: <UserEnglishLevelPage />,
  },
  {
    path: '/sign-up/education',
    element: <UserEducationPage />,
  },
  {
    path: '/sign-up/experience',
    element: <UserExperiencePage />,
  },
  {
    path: '/sign-up/about',
    element: <AboutUserPage />,
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
  {
    path: '/home-page/:id/add-project',
    element: <AddProjectPage />
  },
  {
    path: '/settings',
    element: <SettingsPage />,
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
