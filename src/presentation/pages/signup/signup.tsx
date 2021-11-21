import { FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { AddAccount } from '../../../domain/usecases'
import SignupValidations from '../../../main/builders/singup-validations'
import signupState from './atom'
import FormStatus from './components/form-status'
import Input from './components/input'
import SubmitButton from './components/submit-button'

type SignUpProps = {
  signup: AddAccount
  validations: SignupValidations
}

const SignUp: React.FC<SignUpProps> = ({ signup, validations }) => {
  const [state, setState] = useRecoilState(signupState)

  const validateForm = () => {
    validations.build(state)

    const usernameError = validations.validate('username') && `Campo usuário inválido`
    const emailError = validations.validate('email') && `Campo email inválido`
    const passwordError = validations.validate('email') && `Campo senha inválido`
    const confirmPasswordError = validations.validate('confirmPassword') && `As senhas não conferem`

    return {
      ...state,
      isLoading: true,
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError,
      isFormInvalid: !!usernameError || !!emailError || !!passwordError || !!confirmPasswordError,
    }
  }

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    const validations = validateForm()

    setState(validations)

    signup.add({} as any)

    setTimeout(() => {
      setState({ ...validations, isLoading: false })
    }, 300)
  }

  return (
    <main>
      <form onSubmit={handleSubmit} data-testid="submitSignup">
        <Input data-testid="nameInput" name="name" placeholder="Nome" type="text"></Input>
        <Input data-testid="usernameInput" name="username" placeholder="Usuário" type="text"></Input>
        <Input data-testid="emailInput" name="email" placeholder="Email" type="text"></Input>
        <Input data-testid="passwordInput" name="password" placeholder="Senha" type="password"></Input>
        <Input data-testid="confirmPasswordInput" name="confirmPassword" placeholder="Confirmação de Senha" type="password"></Input>

        <SubmitButton text="Criar Conta"></SubmitButton>
      </form>

      <FormStatus />
    </main>
  )
}

export default SignUp
