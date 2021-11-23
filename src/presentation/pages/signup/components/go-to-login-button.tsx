import { Link } from 'react-router-dom'

const GoToLoginButton: React.FC = () => {
  return (
    <Link replace to="/login" data-testid="loginLink">
      Já tem uma conta? Logar
    </Link>
  )
}

export default GoToLoginButton
