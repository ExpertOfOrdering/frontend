import Practice from '@/assets/Practice.svg?react'
import PracticeLog from '@/assets/PracticeLog.svg?react'
import Setting from '@/assets/Setting.svg?react'
import { Link } from 'react-router-dom'

const Footer = ({ selectedMenu = '' }) => {
  return (
    <div className='fixed bottom-0 z-50 bg-white flex items-center justify-between w-full max-w-208.5 px-[4vw] pt-[1vh] pb-[3vh] left-1/2 transform -translate-x-1/2 rounded-t-[20px] shadow-[0_-1px_55.1px_1px_rgba(0,0,0,0.19)]'>
      <Link to={'/home'}>
        <Practice className={selectedMenu === 'home' ? 'text-black' : 'text-#b3b3b3'} />
      </Link>
      <Link to={'/report'}>
        <PracticeLog className={selectedMenu === 'report' ? 'text-black' : 'text-#b3b3b3'} />
      </Link>
      <Link to={'/mypage'}>
        <Setting className={selectedMenu === 'mypage' ? 'text-black' : 'text-#b3b3b3'} />
      </Link>
    </div>
  )
}

export default Footer
