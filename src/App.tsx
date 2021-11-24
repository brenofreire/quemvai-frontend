import React from 'react'
import { RecoilRoot } from 'recoil'
import { Account } from './domain/models/Account'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from './main/adapters'
import AppRouter from './main/routers/router'
import { currentAccountState } from './presentation/components'

function App() {
  const state = {
    setCurrentAccount: (account: Account | undefined) => setCurrentAccountAdapter(account),
    getCurrentAccount: () => getCurrentAccountAdapter(),
  }

  return (
    <div>
      <RecoilRoot
        initializeState={({ set }) => {
          set(currentAccountState, state)
        }}
      >
        <AppRouter></AppRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
