import React, { useRef } from 'react'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state: any
  setState: any
}

const Input: React.FC<InputProps> = ({ state, setState, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement | any>()

  return (
    <div>
      <input
        {...props}
        readOnly
        type={props.type}
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
