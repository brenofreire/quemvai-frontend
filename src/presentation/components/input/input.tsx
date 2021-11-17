import React, { useRef } from 'react'

interface InputProps {
  state: any
  setState: any
  props: any
}

const Input: React.FC<InputProps> = ({ state, setState, props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement | any>()

  return (
    <div>
      <input
        {...props}
        readOnly
        type="text"
        ref={inputRef}
        onFocus={(e) => {
          e.target.readOnly = false
        }}
        onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
      />
      <label onClick={() => inputRef.current.focus()}>{props.placeholder}</label>
    </div>
  )
}

export default Input
