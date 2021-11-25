import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../../presentation/components'
import { makeSignUpPage } from '../factories/pages'

const AppRouter: React.FC = () => {
  const currentAccount = useRecoilValue(currentAccountState).getCurrentAccount()

  const makeHome = () => {
    if (currentAccount && currentAccount.id) {
      return (
        <Route path="">
          <div>Usuario Logado</div>
        </Route>
      )
    }

    return <Route path="/signup" component={makeSignUpPage}></Route>
  }

  return (
    <Router>
      <Switch>{makeHome()}</Switch>
    </Router>
  )
}

export default AppRouter
