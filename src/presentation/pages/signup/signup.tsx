import { FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { AddAccount } from '../../../domain/usecases'
import signupState from './atom'
import FormStatus from './components/form-status'
import Input from './components/input'
import SubmitButton from './components/submit-button'

type SignUpProps = {
  signup: AddAccount
}

const SignUp: React.FC<SignUpProps> = ({ signup }) => {
  const [state, setState] = useRecoilState(signupState)

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    signup.add({} as any)

    setState({ ...state, isLoading: true })
  }

  return (
    <main>
      <form onSubmit={handleSubmit} data-testid="submit-signup">
        <Input data-testid="name-input" name="name" placeholder="Nome" type="text"></Input>
        <Input data-testid="username-input" name="username" placeholder="Usuário" type="text"></Input>
        <Input data-testid="email-input" name="email" placeholder="Email" type="text"></Input>
        <Input data-testid="password-input" name="password" placeholder="Senha" type="password"></Input>
        <Input data-testid="confirm-password-input" name="confirm-password" placeholder="Confirmação de Senha" type="password"></Input>

        <SubmitButton text="Criar Conta"></SubmitButton>
      </form>

      <FormStatus />
    </main>
  )
}

export default SignUp
