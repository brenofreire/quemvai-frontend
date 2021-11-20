import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'
import { RecoilRoot } from 'recoil'
import { AddAccount } from '../../../domain/usecases'
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
        <SignUp signup={signup}></SignUp>
      </Router>
    </RecoilRoot>
  )

  return {
    handleSubmit,
    signup,
  }
}

describe('Test SignUp page', () => {
  it('Should render signup inputs', () => {
    makeSut()
    const nameInput = ['name', 'Nome', 'text']
    const usernameInput = ['username', 'Usuário', 'text']
    const emailInput = ['email', 'Email', 'text']
    const passowordInput = ['password', 'Senha', 'password']
    const confirmPassword = ['confirm-password', 'Confirmação de Senha', 'password']

    const inputs = [nameInput, usernameInput, emailInput, passowordInput, confirmPassword]

    inputs.forEach(([itemName, itemText, itemType]) => {
      const el = screen.getByTestId(`${itemName}-input`) as HTMLInputElement

      expect(el.getAttribute('name')).toEqual(itemName)
      expect(el.getAttribute('placeholder')).toEqual(itemText)
      expect(el.type).toEqual(itemType)
    })
  })

  it('Should make API Signup request when Submit form', async () => {
    const comp = makeSut()
    const form = screen.getByTestId('submit-signup')
    fireEvent.submit(form)

    expect(comp.signup.callsCount).toBe(1)
  })

  it('Should set form as loading when submit', () => {
    makeSut()
    const form = screen.getByTestId('submit-signup')
    fireEvent.submit(form)

    const loadingSpinner = screen.getByTestId('form-is-loading')
    expect(loadingSpinner).toBeInTheDocument()
  })
})
