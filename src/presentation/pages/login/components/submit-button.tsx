import React from 'react'
import { useRecoilValue } from 'recoil'
import Button from '../../../components/button/Button'
import { loginState } from '../atom'

type SubmitButtonProps = {
  text: string
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const state = useRecoilValue(loginState)

  return <Button state={state} {...props} />
}

export default SubmitButton
