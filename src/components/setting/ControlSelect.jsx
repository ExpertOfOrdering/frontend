const ControlSelect = ({ label, value, onChange }) => {
  const list = label === '글씨 크기' ? ['작음', '보통', '큼'] : ['ON', 'OFF']
  return (
    <div className='flex justify-between items-center disabled'>
      <p className='text-[3.4375rem] font-medium whitespace-nowrap'>{label}</p>
      <div className='flex w-[50%] gap-6 justify-end'>
        {list.map((l) => (
          <button
            key={l}
            type='button'
            disabled={true}
            onClick={() => onChange(l)}
            className={`text-[3.3rem] py-2 whitespace-nowrap font-medium ${value === l ? 'bg-[#58AFFF] px-[1.38rem] text-white rounded-[0.625rem]' : 'text-[#B3B3B3]'}`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ControlSelect
