import Footer from '@/components/shared/Footer'
import PracticeLog from '@/components/practiceLog/PracticeLog'

const PracticeLogPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center w-full max-w-208.5 min-h-screen bg-[linear-gradient(180deg,#A6D4FF_0%,#B4F6FD_34.12%,#D7FBFF_85.05%)]'>
        <div className='px-5 w-full flex flex-col gap-13'>
          <h1 className='font-semibold text-[3.4375rem] mt-33 text-center'>
            정순자님, 잘하고 있어요!
          </h1>
          <PracticeLog />
        </div>
        <Footer selectedMenu='practiceLog' />
      </div>
    </div>
  )
}

export default PracticeLogPage
