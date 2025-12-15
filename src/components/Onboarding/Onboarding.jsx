import React from 'react'
import Logo from '@/assets/OnboardingLogo.svg'

function Onboarding() {
  return (
    <div className='min-h-screen w-full flex justify-center'>
      <div className='w-full min-h-screen max-w-208.5 flex flex-col items-center justify-center bg-[#58AFFF]'>
        <img src={Logo} alt='Onboarding Image' className='w-121 max-w-[80%] h-auto' />
      </div>
    </div>
  )
}

export default Onboarding
