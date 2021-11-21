import { useRecoilValue } from 'recoil'
import { Button } from '../../../components/index'
import signupState from '../atom'

type SignUpSubmitButton = {
  text: string
}

const SubmitButton: React.FC<SignUpSubmitButton> = ({ text }) => {
  const state = useRecoilValue(signupState)

  return <Button data-testid="submitButton" state={state} text={text} />
}

export default SubmitButton
