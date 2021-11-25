import { FormEvent } from 'react'
import { useRecoilValue } from 'recoil'
import { LoginAccount } from '../../../domain/usecases'
import { currentAccountState } from '../../components/atoms/atoms'
import Header from '../../components/header/header'
import { mockLoggedAccount } from '../signup/mocks'
import { loginState } from './atom'
import Input from './components/input'
import SubmitButton from './components/submit-button'

type LoginPresenterProps = {
  authentication: LoginAccount
}

const Login: React.FC<LoginPresenterProps> = ({ authentication }) => {
  const getLoginState = useRecoilValue(loginState)

  const { setCurrentAccount } = useRecoilValue(currentAccountState)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setCurrentAccount(mockLoggedAccount)

    authentication.login({
      username: getLoginState.username,
      password: getLoginState.password,
    })
  }

  return (
    <div>
      <Header></Header>

      <form onSubmit={handleSubmit}>
        <Input data-testid="username-input" name="usernasme" placeholder="Nome de usuário" type="text" />
        <Input data-testid="password-input" name="password" placeholder="Senha" type="password" />

        <SubmitButton text="Enviar"></SubmitButton>
      </form>
    </div>
  )
}

export default Login
