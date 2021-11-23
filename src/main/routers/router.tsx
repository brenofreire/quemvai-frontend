import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../../presentation/components'
import { MakeSignupMock } from '../../presentation/pages/signup/mocks'
import SignUp from '../../presentation/pages/signup/signup'
import SignupValidations from '../builders/singup-validations'

const AppRouter: React.FC = () => {
  const currentAccount = useRecoilValue(currentAccountState)

  const makeHome = () => {
    if (currentAccount && currentAccount.id) {
      return (
        <Route path="">
          <div>Usuario Logado</div>
        </Route>
      )
    }

    return (
      <Route path="/">
        <SignUp signup={new MakeSignupMock()} validations={new SignupValidations()}></SignUp>
      </Route>
    )
  }

  return (
    <Router>
      <Switch>{makeHome()}</Switch>
    </Router>
  )
}

export default AppRouter
