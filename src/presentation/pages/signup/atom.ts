import { atom } from 'recoil'

const signupState = atom({
  key: 'signupState',
  default: {
    isLoading: false,
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    usernameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  },
})

export default signupState
