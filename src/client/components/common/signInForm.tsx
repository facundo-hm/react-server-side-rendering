import React from 'react'
import { Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap'
import { GoogleLogin } from 'react-google-login'

import { SignIn, GoogleLoginSuccess, GoogleLoginFailure } from '../../../types'

interface Props {
  showForm: boolean
  signIn?: SignIn
  googleLoginSuccess: GoogleLoginSuccess
  googleLoginFailure: GoogleLoginFailure
  error?: string
  toggleFrom: () => void
  loadingAuth?: boolean
  orderVersion?: boolean
}

interface State {
  [key: string]: undefined | boolean
  emailInvalid?: boolean
  passwordInvalid?: boolean
}

export class SignInForm extends React.Component<Props, State> {
  state: State = {}

  email: HTMLInputElement | null = null
  password: HTMLInputElement | null = null

  googleClientId = process.env.GOOGLE_CLIENT_ID

  submit = () => {
    const email = this.email as HTMLInputElement
    const pass = this.password as HTMLInputElement

    if (!email.validity.valid) {
      return this.setState({ emailInvalid: true })
    }

    if (!pass.validity.valid) {
      return this.setState({ passwordInvalid: true })
    }

    if (this.props.signIn) {
      this.props.signIn(email.value, pass.value)
    }
  }

  resetValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target

    if (this.state[name + 'Invalid']) {
      this.setState({ [name + 'Invalid']: false })
    }
  }

  render() {
    const {
      error,
      showForm,
      toggleFrom,
      googleLoginSuccess,
      googleLoginFailure,
      loadingAuth,
      orderVersion
    } = this.props

    if (showForm) {
      return (
        <div className={`sign-form ${orderVersion ? 'order-version' : ''}`}>
          <h3 className={`bold-title ${orderVersion ? 'order-version' : ''}`}>
            Login
          </h3>

          <div
            className={`mobile-titles ${orderVersion ? 'order-version' : ''}`}
          >
            <Button color="link" className="bold-title active-title">
              Login
            </Button>

            <Button color="link" className="bold-title" onClick={toggleFrom}>
              Sign up
            </Button>
          </div>

          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="signInEmail"
                placeholder="Email"
                innerRef={ref => (this.email = ref)}
                invalid={this.state.emailInvalid}
                onBlur={this.resetValidation}
                required
              />

              <FormFeedback>Invalid Email</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Input
                type="password"
                name="password"
                id="signInPassword"
                placeholder="Password"
                innerRef={ref => (this.password = ref)}
                invalid={this.state.passwordInvalid}
                onBlur={this.resetValidation}
                minLength={8}
                required
              />

              <FormFeedback>
                The password must be of minimum length 8 characters
              </FormFeedback>
            </FormGroup>

            {error && <p className="error-message">{error}</p>}

            <div className="form-footer">
              <p className="underline-text">Forgot password?</p>

              <div className="buttons-container">
                <Button
                  type="button"
                  color="primary"
                  className="actionButton"
                  onClick={this.submit}
                  disabled={loadingAuth}
                >
                  Login
                </Button>

                <GoogleLogin
                  clientId={this.googleClientId as string}
                  buttonText="Login with Google"
                  onSuccess={googleLoginSuccess}
                  onFailure={googleLoginFailure}
                  disabled={loadingAuth}
                  render={(renderProps: any) => (
                    <button
                      onClick={renderProps.onClick}
                      className="google-button"
                    >
                      <span className="google-icon" />
                      <span className="google-title">Login with Google</span>
                    </button>
                  )}
                />
              </div>
            </div>
          </Form>
        </div>
      )
    }

    return (
      <div className={`sign-message ${orderVersion ? 'order-version' : ''}`}>
        <Button
          type="button"
          color="primary"
          className="actionButton"
          onClick={toggleFrom}
        >
          Login
        </Button>
      </div>
    )
  }
}
