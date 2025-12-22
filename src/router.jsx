import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Onboarding from '@/components/Onboarding/Onboarding.jsx'
import Signup from '@/components/Signup/Signup.jsx'
import SignupComplete from '@/components/Signup/SignupComplete.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signup-complete',
    element: <SignupComplete />,
  },
])

export default router
