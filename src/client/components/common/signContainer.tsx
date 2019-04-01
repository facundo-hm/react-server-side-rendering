import React from 'react'

import { SignInForm } from './signInForm'
import { SignUpForm } from './signUpForm'
import { AuthConsumer } from './authContext'
import { SignUp, GoogleLoginSuccess, GoogleLoginFailure } from '../../../types'

interface Props {
  cleanError?: () => void
  toggleFormCallback?: (showLoginForm: boolean) => void
  orderVersion?: boolean
}

interface State {
  showLoginForm: boolean
}

export class SignContainer extends React.Component<Props, State> {
  state: State = {
    showLoginForm: true
  }

  toggleSignForm = () => {
    const { cleanError, toggleFormCallback } = this.props
    const showLoginForm = !this.state.showLoginForm

    if (cleanError) {
      cleanError()
    }

    if (toggleFormCallback) {
      toggleFormCallback(showLoginForm)
    }

    this.setState({ showLoginForm })
  }

  render() {
    const { orderVersion } = this.props
    const { showLoginForm } = this.state

    return (
      <AuthConsumer>
        {({
          login,
          signup,
          authError,
          googleLoginSuccess,
          googleLoginFailure,
          loadingAuth
        }) => (
          <div
            className={`sign-container ${
              orderVersion && !showLoginForm ? 'order-version reverse' : ''
            }`}
          >
            <SignInForm
              showForm={showLoginForm}
              signIn={login}
              error={authError}
              toggleFrom={this.toggleSignForm}
              googleLoginSuccess={googleLoginSuccess as GoogleLoginSuccess}
              googleLoginFailure={googleLoginFailure as GoogleLoginFailure}
              loadingAuth={loadingAuth}
              orderVersion={orderVersion}
            />

            <SignUpForm
              hideForm={showLoginForm}
              toggleFrom={this.toggleSignForm}
              signUp={signup as SignUp}
              error={authError}
              loadingAuth={loadingAuth}
              orderVersion={orderVersion}
            />
          </div>
        )}
      </AuthConsumer>
    )
  }
}
