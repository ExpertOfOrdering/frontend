import React from 'react'

function SignupInput({ label, type, placeholder }) {
  return (
    <>
      <div>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} />
      </div>
    </>
  )
}

export default SignupInput
