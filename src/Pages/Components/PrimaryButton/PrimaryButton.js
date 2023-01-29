import React from 'react'

function PrimaryButton({children}) {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
  )
}

export default PrimaryButton