import Level1 from '@/assets/Level1.svg'
import Level2 from '@/assets/Level2.svg'
import Level3 from '@/assets/Level3.svg'

export const levelData = [
  {
    id: 1,
    label: '초보',
    bgColor: 'bg-[#FFEA96]',
    textColor: 'text-[#5A3A00]',
    isRecommended: false,
    img: Level1,
  },
  {
    id: 2,
    label: '중수',
    bgColor: 'bg-[#96FFAE]',
    textColor: 'text-[#065A00]',
    isRecommended: false,
    img: Level2,
  },
  {
    id: 3,
    label: '달인',
    bgColor: 'bg-[#96E6FE]',
    textColor: 'text-[#00275A]',
    isRecommended: false,
    img: Level3,
  },
]
