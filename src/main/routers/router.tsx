import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../../presentation/components'
import { makeSignUpPage } from '../factories/pages'

const AppRouter: React.FC = () => {
  const currentAccount = useRecoilValue(currentAccountState).getCurrentAccount()

  return (
    <Router>
      <Switch>
        <Route path="/signup" component={makeSignUpPage}></Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
