import { HttpAccessDenied } from '../../infra/http/http-access-denied'
import useLogout from './use-logout'

type ResultType = () => void

const useErrorHandler = (callback: ResultType) => {
  const logout = useLogout()

  return (error: Error) => {
    if (error instanceof HttpAccessDenied) {
      logout()
    } else {
      callback()
    }
  }
}

export default useErrorHandler
