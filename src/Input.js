import React from 'react'

function Input({type, value,placeholder,onChange,pattern,required}) {
  return (
    <input type="text" value={value} placeholder={placeholder} onChange={onChange} pattern={pattern}/>
  )
}

export default Input