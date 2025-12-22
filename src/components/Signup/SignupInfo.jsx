import React from 'react'

function SignupInfo({ label, info }) {
  return (
    <>
      <div>
        <span>{label}</span>
        <span>{info}</span>
      </div>
    </>
  )
}

export default SignupInfo
