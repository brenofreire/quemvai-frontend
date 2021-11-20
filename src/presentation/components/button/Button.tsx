import React from 'react'
import { theme } from '../../style/style-vars'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  text: string
  state: any
}

const Button: React.FC<ButtonProps> = ({ state, ...props }) => {
  return (
    <button disabled={state.isLoading} {...props} style={buttonStyle}>
      {props.text}
    </button>
  )
}

const buttonStyle: React.CSSProperties = {
  background: theme.primaryColor,
  color: theme.white,
  borderRadius: 4,
  border: 0,
  padding: '8px 16px',
  margin: 4,
}

export default Button
