import React from 'react'
import { LoginState } from '../../pages/login/atom'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  text: string
  isInvalid?: boolean
  state: LoginState
}

const Button: React.FC<ButtonProps> = ({ state, ...props }) => {
  return (
    <button disabled={state.isLoginValid} {...props}>
      {props.text}
    </button>
  )
}

export default Button
