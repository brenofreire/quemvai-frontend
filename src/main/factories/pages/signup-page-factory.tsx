import React from 'react'
import { SignUpService } from '../../../infra/services'
import { SignUp } from '../../../presentation/pages'
import SignupValidations from '../../builders/singup-validations'

const makeSignupPage: React.FC = () => {
  return <SignUp signup={new SignUpService()} validations={new SignupValidations()} />
}

export default makeSignupPage
