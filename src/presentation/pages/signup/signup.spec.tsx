import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import faker from 'faker'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'
import { RecoilRoot } from 'recoil'
import EmailInUseError from '../../../domain/erros/EmailInUseError'
import SignupValidations from '../../../main/builders/singup-validations'
import { MakeSignupMock } from './mocks'
import SignUp from './signup'

const history = createMemoryHistory({ initialEntries: ['/signup'] })

const makeSut = () => {
  const handleSubmit = jest.fn()
  const signup = new MakeSignupMock()

  render(
    <RecoilRoot initializeState={() => {}}>
      <Router history={history}>
        <SignUp signup={signup} validations={new SignupValidations()}></SignUp>
      </Router>
    </RecoilRoot>
  )

  return {
    handleSubmit,
    signup,
  }
}

const simulateValidFormInput = (password = faker.internet.password()) =>
  simulateFormInput({
    password: password,
    confirmPassword: password,
  })

const populateField = (testId: string, value = faker.random.word()) => {
  const el = screen.getByTestId(testId)
  fireEvent.input(el, { target: { value } })
}

const simulateFormInput = ({
  name = faker.name.firstName(),
  username = faker.internet.userName(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  confirmPassword = faker.internet.password(),
}): any => {
  populateField('nameInput', name)
  populateField('usernameInput', username)
  populateField('emailInput', email)
  populateField('passwordInput', password)
  populateField('confirmPasswordInput', confirmPassword)
}

const submitForm = async () => {
  const form = screen.getByTestId('submitSignup')
  fireEvent.submit(form)
  await waitFor(() => form)
}

describe('Test SignUp page', () => {
  it('Should render signup inputs', () => {
    makeSut()
    const nameInput = ['name', 'Nome', 'text']
    const usernameInput = ['username', 'Usuário', 'text']
    const emailInput = ['email', 'Email', 'text']
    const passowordInput = ['password', 'Senha', 'password']
    const confirmPassword = ['confirmPassword', 'Confirmação de Senha', 'password']

    const inputs = [nameInput, usernameInput, emailInput, passowordInput, confirmPassword]

    inputs.forEach(([itemName, itemText, itemType]) => {
      const el = screen.getByTestId(`${itemName}Input`) as HTMLInputElement

      expect(el.getAttribute('name')).toEqual(itemName)
      expect(el.getAttribute('placeholder')).toEqual(itemText)
      expect(el.type).toEqual(itemType)
    })
  })

  it('Should make API Signup request when Submit form', async () => {
    const comp = makeSut()
    simulateValidFormInput()
    await submitForm()

    expect(comp.signup.callsCount).toBe(1)
  })

  it('Should set form as loading when submit', async () => {
    makeSut()
    await submitForm()

    const loadingSpinner = screen.getByTestId('formIsLoading')
    const submitbutton = screen.getByTestId('submitButton')
    expect(loadingSpinner).toBeInTheDocument()
    expect(submitbutton).toBeDisabled()
  })

  it('Should show error when username is not valid', async () => {
    makeSut()
    simulateFormInput({ username: 'sm' })
    await submitForm()

    const usernameError = screen.getByTestId('usernameError')
    expect(usernameError).toBeInTheDocument()
  })

  it('Should show error when email is not valid', async () => {
    makeSut()
    simulateFormInput({ email: 'wrong email' })
    await submitForm()

    const emailError = screen.getByTestId('emailError')
    expect(emailError).toBeInTheDocument()
  })

  it('Should show error when password do not match', async () => {
    makeSut()
    simulateFormInput({ confirmPassword: '123123123' })
    await submitForm()

    const confirmPasswordError = screen.getByTestId('confirmPasswordError')
    expect(confirmPasswordError).toBeInTheDocument()
  })

  it('Should have button to login if the user already have an account', async () => {
    makeSut()

    const loginLink = screen.getByTestId('loginLink')
    fireEvent.click(loginLink)

    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/login')
    expect(loginLink).toBeInTheDocument()
  })

  it('Should redirect to /home when have signup sucess', async () => {
    makeSut()
    simulateValidFormInput()
    await submitForm()

    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/home')
    // create local storage test
  })

  it('Should show api error if there is some', async () => {
    const { signup } = makeSut()
    const emailInUseError = new EmailInUseError()
    jest.spyOn(signup, 'add').mockRejectedValueOnce(emailInUseError)

    simulateValidFormInput()
    await submitForm()

    const apiError = screen.getByTestId('apiError')
    expect(apiError.innerHTML).toEqual(emailInUseError.message)
    expect(signup.add).toHaveBeenCalled()
  })

  it('Should disable submit button if some input is not filled', () => {
    makeSut()
    const submitbutton = screen.getByTestId('submitButton')
    populateField('nameInput', 'name')
    expect(submitbutton).toBeDisabled()
    populateField('usernameInput', 'username')
    expect(submitbutton).toBeDisabled()
    populateField('emailInput', 'email')
    expect(submitbutton).toBeDisabled()
    populateField('passwordInput', 'password')
    expect(submitbutton).toBeDisabled()
    populateField('confirmPasswordInput', 'confirmPassword')
    expect(submitbutton).not.toBeDisabled()
  })
})
