import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '.'

export const getAccessToken = () => {
  return getCurrentAccountAdapter().accessToken
}

export const setAccessToken = (newAcessToken: string) => {
  const currentAccount = getCurrentAccountAdapter()

  return setCurrentAccountAdapter({ ...currentAccount, accessToken: newAcessToken })
}
