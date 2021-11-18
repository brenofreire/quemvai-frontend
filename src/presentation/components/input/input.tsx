import React, { useRef } from 'react'
import { theme } from '../../style/style-vars'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state: any
  setState: any
}

const Input: React.FC<InputProps> = ({ state, setState, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement | any>()

  return (
    <div>
      <label onClick={() => inputRef.current.focus()}>{props.placeholder}</label>
      <br />
      <input
        {...props}
        readOnly
        type={props.type}
        ref={inputRef}
        onFocus={(e) => {
          e.target.readOnly = false
        }}
        onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
        style={inputStyle}
      />
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  backgroundColor: theme.white,
  color: theme.black,
  borderRadius: 4,
  border: '2px solid',
  borderColor: theme.primaryColor,
  outline: 0,
  padding: 8,
}

export default Input
