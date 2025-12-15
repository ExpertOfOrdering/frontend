const Button = ({ label }) => {
  return (
    <div>
      <button className='px-5 py-3 bg-[#B7B7B7] rounded-[0.625rem] text-white text-[2.1875rem] font-semibold whitespace-nowrap'>
        {label}
      </button>
    </div>
  )
}

export default Button
