import * as Slider from '@radix-ui/react-slider'

const ControlSlider = ({ label, value, onChange }) => {
  const isDisabled = label === '음성 크기'

  return (
    <div className='flex justify-between items-center'>
      <div className={`whitespace-nowrap text-[3.4375rem] font-medium`}>{label}</div>
      <Slider.Root
        disabled={isDisabled}
        min={0}
        max={100}
        step={1}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        className='relative flex items-center select-none touch-none w-[50%] h-6'
      >
        <Slider.Track className='bg-[#d2d2d2] relative grow rounded-full h-3'>
          <Slider.Range className='absolute h-full bg-[#58AFFF] rounded-full' />
        </Slider.Track>

        <Slider.Thumb className='block w-4 h-4 ring-8 ring-[#58AFFF] bg-[#95CCFF] rounded-full shadow outline-none' />
      </Slider.Root>
    </div>
  )
}

export default ControlSlider
