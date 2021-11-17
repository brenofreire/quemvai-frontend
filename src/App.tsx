import React from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'
import Login from './presentation/pages/login/login'

function App() {
  return (
    <div className="App">
      <RecoilRoot initializeState={() => {}}>
        <Login></Login>
      </RecoilRoot>
    </div>
  )
}

export default App
