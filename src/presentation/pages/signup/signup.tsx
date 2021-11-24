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
  const skipFirstRender = (fn: () => void) => {
    if (!isFirstRender) fn()
  }

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

  const validateCallback = useCallback(
    (field: string) => {
      skipFirstRender(() => {
        setState((old) => ({ ...old, [`${field}Error`]: validations.validate(field, state) }))
        setState((old) => ({
          ...old,
          isFormInvalid: !!old.usernameError || !!old.emailError || !!old.passwordError || !!old.confirmPasswordError,
        }))
      })
    },
    [setState, state, validations]
  )

  useEffect(() => validateCallback('username'), [state.username])
  useEffect(() => validateCallback('email'), [state.email])
  useEffect(() => validateCallback('password'), [state.password])
  useEffect(() => validateCallback('confirmPassword'), [state.confirmPassword])

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

      <GoToLoginButton />
    </main>
  )
}

export default SignUp
