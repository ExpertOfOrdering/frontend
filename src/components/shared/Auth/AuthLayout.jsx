import React from 'react'
import AuthTitle from '@/components/shared/Auth/AuthTitle.jsx'

function AuthLayout({ title, children }) {
  return (
    <div className='min-h-screen w-full grid grid-rows-[auto_1fr_auto]'>
      <div className='flex justify-center pt-20'>
        <AuthTitle title={title} />
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-full max-w-208.5 flex flex-col items-center gap-10'>{children}</div>
      </div>
    </div>
  )
}

export default AuthLayout
