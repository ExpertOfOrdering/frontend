import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Onboarding from '@/components/onboarding/Onboarding1.jsx'
import Signup from '@/components/signup/Signup.jsx'
import Login from '@/components/login/Login.jsx'
import PracticeLogPage from './pages/PracticeLogPage.jsx'
import SettingPage from './pages/SettingPage.jsx'
import Onb from '@/components/onboarding/Onboarding2.jsx'
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
