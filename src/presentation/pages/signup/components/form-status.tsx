import { useRecoilValue } from 'recoil'
import signupState from './atom'

const FormStatus: React.FC = (props) => {
  const state = useRecoilValue(signupState)

  return (
    <div {...props}>
      {state.isLoading && <div data-testid="formIsLoading">Carregando...</div>}
      {state.usernameError && <div data-testid="usernameError">O campo de usuário {state.usernameError}</div>}
      {state.emailError && <div data-testid="emailError">O campo de email {state.emailError}</div>}
      {state.passwordError && <div data-testid="passwordError">O campo de senha {state.passwordError}</div>}
      {state.confirmPasswordError && (
        <div data-testid="confirmPasswordError">O campo de confirmação de senha {state.confirmPasswordError}</div>
      )}
      {state.apiError && <div data-testid="apiError">{state.apiError}</div>}
    </div>
  )
}

export default FormStatus
