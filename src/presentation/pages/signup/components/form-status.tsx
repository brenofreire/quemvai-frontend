import { useRecoilValue } from 'recoil'
import signupState from '../atom'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(signupState)

  return (
    <>
      {state.isFormLoading && <div data-testid="form-is-loading">Carregando...</div>}
      {state.usernameError && <div data-testid="form-username-error">{state.usernameError}</div>}
      {state.emailError && <div data-testid="form-email-error">{state.emailError}</div>}
      {state.passwordError && <div data-testid="form-password-error">{state.passwordError}</div>}
      {state.confirmPasswordError && <div data-testid="form-confirm-password-error">{state.confirmPasswordError}</div>}
    </>
  )
}

export default FormStatus
