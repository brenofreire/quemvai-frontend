import React from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'
import makeLoginAccountAuthenticator from './main/factories/usecases/login-account-maker'
import Login from './presentation/pages/login/login'

function App() {
  return (
    <div className="App">
      <RecoilRoot initializeState={() => {}}>
        <Login authentication={makeLoginAccountAuthenticator()}></Login>
      </RecoilRoot>
    </div>
  )
}

export default App
