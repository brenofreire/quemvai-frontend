import { useRecoilValue } from 'recoil'
import signupState from '../atom'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(signupState)

  return (
    <>
      {state.isLoading && <div data-testid="formIsLoading">Carregando...</div>}
      {state.usernameError && <div data-testid="usernameError">{state.usernameError}</div>}
      {state.emailError && <div data-testid="emailError">{state.emailError}</div>}
      {state.passwordError && <div data-testid="passwordError">{state.passwordError}</div>}
      {state.confirmPasswordError && <div data-testid="confirmPasswordError">{state.confirmPasswordError}</div>}
    </>
  )
}

export default FormStatus
