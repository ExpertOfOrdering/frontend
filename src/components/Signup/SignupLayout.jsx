import React from 'react'
import AuthTitle from '@/components/shared/AuthTitle.jsx'

function SignupLayout({ children }) {
  return (
    <div className='min-h-screen w-full flex justify-center'>
      <div className='w-full min-h-screen max-w-208.5 flex flex-col items-center justify-center gap-10'>
        <AuthTitle title='계정 회원가입' />
        {children}
      </div>
    </div>
  )
}

export default SignupLayout
