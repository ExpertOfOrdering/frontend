import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Onboarding from '@/components/Onboarding/Onboarding.jsx'
import Signup from '@/components/Signup/Signup.jsx'
import PracticeLogPage from './pages/PracticeLogPage.jsx'
import SettingPage from './pages/SettingPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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
    ],
  },
])

export default router
