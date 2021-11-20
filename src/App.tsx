import React from 'react'
import { RecoilRoot } from 'recoil'
import AppRouter from './main/routers/router'

function App() {
  return (
    <div>
      <RecoilRoot initializeState={() => {}}>
        <AppRouter></AppRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
