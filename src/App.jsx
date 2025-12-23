import { Outlet } from 'react-router-dom'
import BgmManager from './components/setting/BgmManager'
import GlobalClickSfxManager from './components/setting/GlobalClickSfxManager'

function App() {
  return (
    <>
      <BgmManager />
      <GlobalClickSfxManager />
      <Outlet />
    </>
  )
}

export default App
