import { FormEvent } from 'react'
import { useRecoilValue } from 'recoil'
import { LoginAccount } from '../../../domain/usecases'
import { loginState } from './atom'
import Input from './components/input'
import SubmitButton from './components/submit-button'

type LoginPresenterProps = {
  authentication: LoginAccount
}

const Login: React.FC<LoginPresenterProps> = ({ authentication }) => {
  const getLoginState = useRecoilValue(loginState)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    authentication.login({
      password: getLoginState.password,
      username: getLoginState.username,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="username" placeholder="Nome de usuário" type="text" />
        <Input name="password" placeholder="Senha" type="password" />

        <SubmitButton text="Enviar"></SubmitButton>
      </form>
    </div>
  )
}

export default Login
