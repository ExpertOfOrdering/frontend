import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Onboarding from '@/components/Onboarding/Onboarding1.jsx'
import Main from '@/components/main/Main.jsx'
import Signup from '@/components/Signup/Signup.jsx'
import Login from '@/components/Login/Login.jsx'
import PracticeLogPage from './pages/PracticeLogPage.jsx'
import SettingPage from './pages/SettingPage.jsx'
import Onb from '@/components/Onboarding/Onboarding2.jsx'
import PracticeSetup from '@/components/practiceSetup/PracticeSetup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Onboarding />,
      },
      {
        path: '/main',
        element: <Main />,
      },

      {
        path: '/onboarding',
        element: <Onboarding />,
      },
      {
        path: '/practiceLog',
        element: <PracticeLogPage />,
      },
      {
        path: '/setting',
        element: <SettingPage />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/onb',
        element: <Onb />,
      },
      {
        path: '/practiceSetup',
        element: <PracticeSetup />,
      },
    ],
  },
])

export default router
