import { useRecoilValue } from 'recoil'
import { Button } from '../../../components/index'
import signupState from './atom'

type SignUpSubmitButton = {
  text: string
}

const SubmitButton: React.FC<SignUpSubmitButton> = ({ text }) => {
  const state = useRecoilValue(signupState)
  const isButtonDisabled = state.isFormInvalid
  const isFormNotCompletelyFilled =
    !state.name.length || !state.username.length || !state.email.length || !state.password.length || !state.confirmPassword.length

  return <Button data-testid="submitButton" disabled={isButtonDisabled || isFormNotCompletelyFilled} state={state} text={text} />
}

export default SubmitButton
