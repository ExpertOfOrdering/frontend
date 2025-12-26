// AIChatBubble.jsx
// @ts-check

import AIBubbleTail from '@/assets/AIBubbleTail.svg?react'

/**
 * @typedef {{
 *   text?: string,
 *   children?: import('react').ReactNode
 * }} AIChatBubbleProps
 */

/** @type {import('react').FC<AIChatBubbleProps>} */

const AIChatBubble = ({ text, children }) => {
  return (
    <div className='flex items-center'>
      <AIBubbleTail />
      <div className=' bg-white/75 rounded-2xl max-w-[75%] px-[1.94rem] py-7 -ml-[0.05rem]'>
        <p className='relative z-20 text-[1.625rem] font-normal tracking-[-0.02em]'>
          {children ?? text}
        </p>
      </div>
    </div>
  )
}

export default AIChatBubble
