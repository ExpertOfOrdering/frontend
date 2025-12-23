import React from 'react'
import Logo from '@/assets/OnboardingLogo.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Onboarding1() {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login')
    }, 2000) // 2초 후에 /login 경로로 이동
    return () => clearTimeout(timer) // 컴포넌트 언마운트 시 타이머 정리
  }, [])

  return (
    <div className='min-h-screen w-full flex justify-center'>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 3 }}
        className='w-full min-h-screen max-w-208.5 flex flex-col items-center justify-center bg-[#58AFFF]
      '
      >
        <img src={Logo} alt='Onboarding Image' className='w-121 max-w-[80%] h-auto' />
      </motion.div>
    </div>
  )
}

export default Onboarding1
