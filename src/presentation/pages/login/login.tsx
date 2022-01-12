import { FormEvent, useCallback, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { LoginAccount } from '../../../domain/usecases'
import { currentAccountState } from '../../components/atoms/atoms'
import { mockLoggedAccount } from '../signup/mocks'
import { loginState } from './atom'
import Input from './components/input'
import SubmitButton from './components/submit-button'

type LoginPresenterProps = {
  authentication: LoginAccount
}

const Login: React.FC<LoginPresenterProps> = ({ authentication }) => {
  const [getLoginState, setLoginState] = useRecoilState(loginState)

  const { setCurrentAccount } = useRecoilValue(currentAccountState)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    authentication
      .login({
        username: getLoginState.username,
        password: getLoginState.password,
      })
      .then(() => {
        setCurrentAccount(mockLoggedAccount)
      })
      .catch(() => {})
  }

  const toggleDisableSubmitButton = useCallback(() => {
    setLoginState((old) => ({ ...old, isLoginValid: !old.username?.length || !old.password?.length }))
  }, [setLoginState])

  useEffect(() => toggleDisableSubmitButton(), [getLoginState.password, getLoginState.username, toggleDisableSubmitButton])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input data-testid="usernameInput" name="username" placeholder="Usuário" type="text" />
        <Input data-testid="passwordInput" name="password" placeholder="Senha" type="password" />

        <SubmitButton data-testid="submitButton" text="Enviar"></SubmitButton>
      </form>
    </div>
  )
}

export default Login
