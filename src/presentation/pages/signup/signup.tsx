import { FormEvent, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useRecoilState, useRecoilValue } from 'recoil'
import { AddAccount } from '../../../domain/usecases'
import SignupValidations from '../../../main/builders/singup-validations'
import { currentAccountState } from '../../components'
import { useSkipFirstRender } from '../../hooks'
import { FormStatus, GoToLoginButton, Input, SubmitButton } from './components'
import signupState from './components/atom'

type SignUpProps = {
  signup: AddAccount
  validations: SignupValidations
}

const SignUp: React.FC<SignUpProps> = ({ signup, validations }) => {
  const history = useHistory()

  const { setCurrentAccount } = useRecoilValue(currentAccountState)
  const [state, setState] = useRecoilState(signupState)

  const isFirstRender = useSkipFirstRender()

  const skipFirstRender = useCallback(
    (fn: () => void) => {
      if (!isFirstRender) fn()
    },
    [isFirstRender]
  )

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    setState((old) => ({ ...old, isLoading: true }))

    if (!state.isFormInvalid) {
      signup
        .add({} as any)
        .then((account) => {
          setState((old) => ({ ...old, isLoading: false }))
          setCurrentAccount(account)
          history.replace('/home')
        })
        .catch((error: Error) => {
          setState((old) => ({ ...old, isLoading: false, apiError: error.message }))
        })
    }
  }

  const validate = useCallback(
    (field: any, hasContent) => {
      if (hasContent) {
        skipFirstRender(() => {
          setState((old) => ({ ...old, [`${field}Error`]: validations.validate(field, old) }))
          setState((old) => ({
            ...old,
            isFormInvalid: !!old.usernameError || !!old.emailError || !!old.passwordError || !!old.confirmPasswordError,
          }))
        })
      }
    },
    [setState, validations, skipFirstRender]
  )

  useEffect(() => validate('username', state.username.length), [state.username, validate])
  useEffect(() => validate('email', state.email.length), [state.email, validate])
  useEffect(() => validate('password', state.password.length), [state.password, validate])
  useEffect(() => validate('confirmPassword', state.confirmPassword.length), [state.confirmPassword, validate])

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

      <FormStatus data-testid="formStatus" />

      <GoToLoginButton />
    </main>
  )
}

export default SignUp
