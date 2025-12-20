import { Outlet } from 'react-router-dom'
import BgmManager from './components/setting/BgmManager'

function App() {
  return (
    <>
      <BgmManager />
      <Outlet />
    </>
  )
}

export default App
