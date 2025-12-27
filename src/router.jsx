import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Onboarding from '@/components/onboarding/Onboarding1.jsx'
import Main from '@/components/main/Main.jsx'
import Signup from '@/components/signup/Signup.jsx'
import Login from '@/components/Login/Login.jsx'
import PracticeLogPage from './pages/PracticeLogPage.jsx'
import SettingPage from './pages/SettingPage.jsx'
import Onb from '@/components/onboarding/Onboarding2.jsx'
import PracticeSetup from '@/components/practiceSetup/PracticeSetup.jsx'
import OrderType from './components/practice/OrderType.jsx'
import Order from './components/practice/Order.jsx'
import MenuModal from './components/practice/MenuModal.jsx'
import CheckOrder from './components/practice/CheckOrder.jsx'
import SelectPayment from './components/practice/PaymentModal.jsx'
import Payment from './components/practice/CardPayment.jsx'
import Result from './components/practice/Result.jsx'

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
      {
        path: '/type',
        element: <OrderType />,
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
])

export default router
