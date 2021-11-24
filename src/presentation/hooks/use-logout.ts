import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../components/atoms/atoms'

const useLogout = () => {
  const history = useHistory()
  const { setCurrentAccount } = useRecoilValue(currentAccountState)

  return () => {
    setCurrentAccount(undefined)
    history.replace('/login')
  }
}

export default useLogout
