import { atom } from 'recoil'

const signupState = atom({
  key: 'signupState',
  default: {
    isLoading: false,
    isFormInvalid: false,
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '' as string | null,
    usernameError: '' as string | null,
    emailError: '' as string | null,
    passwordError: '' as string | null,
    confirmPasswordError: '' as string | null,
    apiError: '' as string | null,
  },
})

export default signupState
