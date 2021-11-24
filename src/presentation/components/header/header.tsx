import { useRecoilValue } from 'recoil'
import useLogout from '../../hooks/use-logout'
import currentAccountState from '../atoms/atoms'

const Header: React.FC = () => {
  const logout = useLogout()
  const loggedAccount = useRecoilValue(currentAccountState).getCurrentAccount()

  return (
    <header>
      <nav>
        <ul>
          <li>{loggedAccount?.username}</li>
          <li>Option 2</li>
          <li onClick={logout}>Logout</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
