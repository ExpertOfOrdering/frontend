const MonthButton = ({ month }) => {
  return (
    <div>
      <button className='bg-[#F0F0F0] rounded-[0.625rem] py-[0.94rem] px-5 text-[3.4375rem] font-semibold whitespace-nowrap'>
        {month}
      </button>
    </div>
  )
}

export default MonthButton
