import { FormEvent, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { AccountStatusEnum } from '../../../domain/models/AccountStatusEnum'
import { LoginAccount } from '../../../domain/usecases'
import { currentAccountState } from '../../components/atoms/atoms'
import Header from '../../components/header/header'
import { loginState } from './atom'
import Input from './components/input'
import SubmitButton from './components/submit-button'

type LoginPresenterProps = {
  authentication: LoginAccount
}

const Login: React.FC<LoginPresenterProps> = ({ authentication }) => {
  const getLoginState = useRecoilValue(loginState)

  const [currentAccount, setCurrentAccount] = useRecoilState(currentAccountState)

  useEffect(() => {
    console.log(currentAccount)
  }, [currentAccount])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setCurrentAccount({
      id: 1,
      createdAt: new Date().toISOString(),
      email: 'fake@example.com',
      username: 'Fake Name',
      password: 'fake!password',
      status: AccountStatusEnum.ACTIVE,
      updatedAt: new Date().toISOString(),
    })

    authentication.login({
      password: getLoginState.password,
      username: getLoginState.username,
    })
  }

  return (
    <div>
      <Header></Header>

      <form onSubmit={handleSubmit}>
        <Input name="username" placeholder="Nome de usuário" type="text" />
        <Input name="password" placeholder="Senha" type="password" />

        <SubmitButton text="Enviar"></SubmitButton>
      </form>
    </div>
  )
}

export default Login
