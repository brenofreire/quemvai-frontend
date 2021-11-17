import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { loginState } from './atom'
import Input from './components/input'
import SubmitButton from './components/submit-button'

const Login: React.FC = () => {
  const getLoginState = useRecoilValue(loginState)

  useEffect(() => {
    console.log(getLoginState)
  }, [getLoginState])

  return (
    <div>
      <Input name="username" placeholder="Nome de usuário" type="text" />
      <Input name="password" placeholder="Senha" type="password" />

      <SubmitButton text="Enviar"></SubmitButton>
    </div>
  )
}

export default Login
