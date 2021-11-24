import { render, screen } from '@testing-library/react'
import { MutableSnapshot, RecoilRoot } from 'recoil'
import makeLoginAccountAuthenticator from '../../../main/factories/usecases/login-account-maker'
import { currentAccountState } from '../../components'
import Login from './login'

describe('Login presenter test', () => {
  it('Should have username field', () => {
    const setCurrentAccount = jest.fn()
    const getCurrentAccount = jest.fn()

    const initializeState = ({ set }: MutableSnapshot) => {
      set(currentAccountState, { setCurrentAccount, getCurrentAccount })
    }

    render(
      <RecoilRoot initializeState={initializeState}>
        <Login authentication={makeLoginAccountAuthenticator()} />
      </RecoilRoot>
    )

    const usernameField = screen.getByTestId('username-input')

    expect(usernameField).toBeInTheDocument()
  })
})
