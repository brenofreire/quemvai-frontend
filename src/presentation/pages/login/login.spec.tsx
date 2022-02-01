import { render, screen } from '@testing-library/react'
import { MutableSnapshot, RecoilRoot } from 'recoil'
import { currentAccountState } from '../../components'
import { populateField } from '../../test/helpers'
import Login from './login'

const makeSut = () => {
  const setCurrentAccount = jest.fn()
  const getCurrentAccount = jest.fn()
  const login = jest.fn()

  const initializeState = ({ set }: MutableSnapshot) => {
    set(currentAccountState, { setCurrentAccount, getCurrentAccount })
  }

  const mockAuthenticationLogin = () => {
    return { login }
  }

  render(
    <RecoilRoot initializeState={initializeState}>
      <Login authentication={mockAuthenticationLogin()} />
    </RecoilRoot>
  )

  return {
    mockAuthenticationLogin,
  }
}

describe('Login presenter test', () => {
  it('Should have username & password field', () => {
    makeSut()
    const usernameInput = ['username', 'Usuário', 'text']
    const passowordInput = ['password', 'Senha', 'password']

    const inputs = [usernameInput, passowordInput]

    inputs.forEach(([itemName, itemText, itemType]) => {
      const el = screen.getByTestId(`${itemName}Input`) as HTMLInputElement

      expect(el.getAttribute('name')).toEqual(itemName)
      expect(el.getAttribute('placeholder')).toEqual(itemText)
      expect(el.type).toEqual(itemType)
    })
  })

  it('Submit Button should be disabled if there is no values in the form', () => {
    makeSut()
    const submitButton = screen.getByTestId('submitButton')

    populateField('usernameInput', 'any')
    expect(submitButton).toBeDisabled()
    populateField('passwordInput', 'any')
    expect(submitButton).not.toBeDisabled()
  })

  it('Should have link to signup page', () => {
    makeSut()
    const signupLink = screen.getByTestId('signupLink')

    expect(signupLink.getAttribute('href')).toEqual('/signup')
  })

  it('Should have proper text on signup link', () => {
    makeSut()
    const signupLink = screen.getByTestId('signupLink')

    expect(signupLink.innerHTML).toEqual('Cadastra-se')
  })
})
