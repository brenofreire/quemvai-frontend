import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import faker from 'faker'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'
import { RecoilRoot } from 'recoil'
import { AddAccount } from '../../../domain/usecases'
import SignupValidations from '../../../main/builders/singup-validations'
import SignUp from './signup'

export class MakeSignupMock implements AddAccount {
  public callsCount = 0

  add(params: AddAccount.Params): Promise<AddAccount.Model> {
    this.callsCount += 1

    return new Promise((res) => {
      res(params)
    })
  }
}

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

const simulateFormInput = (params: any): any => {
  const populateField = (fieldName: string, value = faker.random.word()): void => {
    const input = screen.getByTestId(fieldName)
    fireEvent.input(input, { target: { value } })
  }

  populateField('nameInput', params.name)
  populateField('usernameInput', params.username)
  populateField('emailInput', params.username)
  populateField('passwordInput', params.username)
  populateField('confirmPasswordInput', params.username)
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
    const form = screen.getByTestId('submitSignup')
    fireEvent.submit(form)

    expect(comp.signup.callsCount).toBe(1)
  })

  it('Should set form as loading when submit', () => {
    makeSut()
    const form = screen.getByTestId('submitSignup')
    fireEvent.submit(form)

    const loadingSpinner = screen.getByTestId('formIsLoading')
    const submitbutton = screen.getByTestId('submitButton')

    expect(loadingSpinner).toBeInTheDocument()
    expect(submitbutton).toBeDisabled()
  })

  it('Should show error when username is not valid', async () => {
    makeSut()

    simulateFormInput({
      name: faker.name,
      username: 'sm',
      email: faker.internet.email(),
      password: faker.internet.password(),
      confirmPassword: faker.internet.password(),
    })

    const form = screen.getByTestId('submitSignup')
    fireEvent.submit(form)
    await waitFor(() => form)

    const usernameError = screen.getByTestId('usernameError')

    expect(usernameError).toBeInTheDocument()
  })
})
