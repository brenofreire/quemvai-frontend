import React from 'react'
import { useRecoilValue } from 'recoil'
import Button from '../../../components/button/Button'
import { loginState } from '../atom'

type SubmitButton = {
  text: string
}

const SubmitButton: React.FC<SubmitButton> = (props) => {
  const state = useRecoilValue(loginState)

  return <Button state={state} {...props} />
}

export default SubmitButton
