import ControlSlider from './ControlSlider'
import ControlSelect from './ControlSelect'
import { useState } from 'react'
import { useAudioStore } from '@/store/audioStore'

const SettingBox = () => {
  const [fontSize, setFontSize] = useState('큼')
  const [voiceGuidance, setVoiceGuidance] = useState('OFF')

  const bgm = useAudioStore((s) => s.bgm)
  const setBgm = useAudioStore((s) => s.setBgm)
  const sfx = useAudioStore((s) => s.sfx)
  const setSfx = useAudioStore((s) => s.setSfx)

  return (
    <div className='flex flex-col gap-11 bg-white rounded-[1.25rem] w-full px-[4.37rem] py-[6.81rem]'>
      <ControlSelect label='글씨 크기' value={fontSize} onChange={setFontSize} />
      <ControlSelect label='음성 안내' value={voiceGuidance} onChange={setVoiceGuidance} />
      <ControlSlider label='음성 크기' value={50} onChange={() => {}} />
      <ControlSlider label='배경음 크기' value={bgm} onChange={setBgm} />
      <ControlSlider label='효과음 크기' value={sfx} onChange={setSfx} />
    </div>
  )
}

export default SettingBox
