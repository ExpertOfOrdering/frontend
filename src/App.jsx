import React from 'react'
import { Outlet } from 'react-router-dom'
import Onboarding from './components/Onboarding/Onboarding'

function App() {
  return (
    <>
      <Outlet />
      <Onboarding />
    </>
  )
}

export default App
