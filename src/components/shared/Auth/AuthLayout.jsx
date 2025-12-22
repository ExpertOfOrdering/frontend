import React from 'react'
import AuthTitle from '@/components/shared/Auth/AuthTitle.jsx'

function AuthLayout({ title, children }) {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-208.5 h-298.5 grid grid-rows-[auto_1fr] pt-20'>
        <div className='flex justify-center'>
          <AuthTitle title={title} />
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-center gap-10'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
