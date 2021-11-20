import { useRecoilState } from 'recoil'
import { Input as InputBase } from '../../../components/index'
import signupState from '../atom'

type SignUpInputProps = {
  placeholder: string
  type: string
  name: string
}

const Input: React.FC<SignUpInputProps> = (props) => {
  const [state, setState] = useRecoilState(signupState)

  return <InputBase state={state} setState={setState} {...props} />
}

export default Input
