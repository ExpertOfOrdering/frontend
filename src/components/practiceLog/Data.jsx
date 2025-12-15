const Data = ({ label, data }) => {
  return (
    <div className='flex items-center gap-2'>
      <span className='text-[2.8125rem] font-semibold whitespace-nowrap'>{label}</span>
      <div className='flex-1 mx-4 h-1 self-center bg-[repeating-linear-gradient(to_right,#D9D9D9_0_9px,transparent_9px_17px)] rounded-full' />
      <span className='text-[2.8125rem] text-[#1B92FF] font-semibold whitespace-nowrap'>
        {data}
      </span>
    </div>
  )
}

export default Data
