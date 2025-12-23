import React from 'react'
import PracticeSetupHeader from '@/components/practiceSetup/PracticeSetupHeader'
import ModeSelect from '@/components/practiceSetup/ModeSelect.jsx'
import LevelSelect from './LevelSelect'
// import categoryData from '@/components/practiceSetup/categoryData.js';
// import levelData from '@/components/practiceSetup/levelData.js';
import Footer from '@/components/shared/Footer.jsx'

function PracticeSetup() {
  return (
    <div className='h-screen w-full flex justify-center'>
      <div className='w-full h-screen max-w-208.5 flex flex-col items-center justify-center'>
        <PracticeSetupHeader />
        <LevelSelect />
        <Footer />
      </div>
    </div>
  )
}

export default PracticeSetup
