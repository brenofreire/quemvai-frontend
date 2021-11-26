import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Redirect, Route, Router } from 'react-router-dom'
import { MutableSnapshot, RecoilRoot } from 'recoil'
import { PrivateRoute } from '.'
import { UserLogged } from '../../domain/models'
import { currentAccountState } from '../../presentation/components'
import { mockLoggedAccount } from '../../presentation/pages/signup/mocks'

const history = createMemoryHistory({ initialEntries: ['/'] })

const makeSut = (account: UserLogged | undefined) => {
  const getCurrentAccount = () => account
  const setCurrentAccount = jest.fn()

  const initializeState = ({ set }: MutableSnapshot) => {
    set(currentAccountState, { setCurrentAccount, getCurrentAccount })
  }

  render(
    <RecoilRoot initializeState={initializeState}>
      <Router history={history}>
        <Route path="/">
          <Redirect to="/some-path" />
        </Route>
        <PrivateRoute path="/some-path" component={() => <div>Some Component</div>} />
      </Router>
    </RecoilRoot>
  )

  return {
    getCurrentAccount,
    setCurrentAccount,
  }
}

describe('Test PrivateRoute', () => {
  it('Should redirect to /login if theres no user logged', () => {
    makeSut(undefined)

    expect(history.location.pathname).toBe('/login')
  })

  it('Should not to redirect to /login if theres accessToken', () => {
    makeSut(mockLoggedAccount)

    expect(history.location.pathname).toBe('/some-path')
  })
})
