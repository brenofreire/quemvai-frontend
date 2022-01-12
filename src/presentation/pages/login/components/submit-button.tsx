import React from 'react'
import { useRecoilValue } from 'recoil'
import Button from '../../../components/button/button'
import { loginState } from '../atom'

type SubmitButtonProps = {
  text: string
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const getLoginState = useRecoilValue(loginState)
  const state = useRecoilValue(loginState)

  return <Button disabled={getLoginState.isLoginValid} state={state} {...props} />
}

export default SubmitButton
