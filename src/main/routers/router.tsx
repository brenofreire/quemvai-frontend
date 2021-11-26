import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeSignUpPage } from '../factories/pages'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={makeSignUpPage}></Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
