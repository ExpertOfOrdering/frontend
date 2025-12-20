import Footer from '@/components/shared/Footer'
import SettingBox from '@/components/setting/SettingBox'

const SettingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col px-5 py-15 items-center w-full max-w-208.5 min-h-screen bg-[linear-gradient(180deg,#A6D4FF_0%,#B4F6FD_34.12%,#D7FBFF_85.05%)]'>
        <SettingBox />
        <Footer selectedMenu='setting' />
      </div>
    </div>
  )
}

export default SettingPage
