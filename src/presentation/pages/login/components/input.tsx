import React from 'react'
import { useRecoilState } from 'recoil'
import { Input as InputBase } from '../../../components/index'
import { loginState } from '../atom'

type InputBaseProps = {
  placeholder: string
  name: string
  type: string
}

const Input: React.FC<InputBaseProps> = (props) => {
  const [state, setState] = useRecoilState(loginState)

  return <InputBase state={state} setState={setState} {...props} />
}

export default Input
