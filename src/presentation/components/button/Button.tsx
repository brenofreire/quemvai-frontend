import React from 'react'
import { LoginState } from '../../pages/login/atom'
import { theme } from '../../style/style-vars'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  text: string
  isInvalid?: boolean
  state: LoginState
}

const Button: React.FC<ButtonProps> = ({ state, ...props }) => {
  return (
    <button disabled={state.isLoginValid} {...props} style={buttonStyle}>
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
