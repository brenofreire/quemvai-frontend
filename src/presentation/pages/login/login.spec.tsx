import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import makeLoginAccountAuthenticator from '../../../main/factories/usecases/login-account-maker'
import Login from './login'

describe('Login presenter test', () => {
  it('Should have username field', () => {
    render(
      <RecoilRoot initializeState={() => {}}>
        <Login authentication={makeLoginAccountAuthenticator()} />
      </RecoilRoot>
    )

    const usernameField = screen.getByTestId('username-input')

    expect(usernameField).toBeInTheDocument()
  })
})
