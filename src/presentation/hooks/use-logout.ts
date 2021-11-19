import { useHistory } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { currentAccountState } from '../components/atoms/atoms'

const useLogout = () => {
  const history = useHistory()
  const setCurrentAccount = useSetRecoilState(currentAccountState)

  return () => {
    setCurrentAccount(undefined)
    history.replace('/login')
  }
}

export default useLogout
