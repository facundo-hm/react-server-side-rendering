import React from 'react'
import { Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap'

import { SignUp } from '../../../types'

interface Props {
  hideForm: boolean
  toggleFrom: () => void
  signUp: SignUp
  error?: string
  loadingAuth?: boolean
  orderVersion?: boolean
}

interface State {
  [key: string]: undefined | boolean
  emailInvalid?: boolean
  passwordInvalid?: boolean
  confirmPasswordInvalid?: boolean
}

export class SignUpForm extends React.Component<Props, State> {
  state: State = {}

  email: HTMLInputElement | null = null
  phone: HTMLInputElement | null = null
  password: HTMLInputElement | null = null
  confirmPass: HTMLInputElement | null = null

  submit = () => {
    const email = this.email as HTMLInputElement
    const phone = this.phone as HTMLInputElement
    const pass = this.password as HTMLInputElement
    const confirmPass = this.confirmPass as HTMLInputElement

    if (!email.validity.valid) {
      return this.setState({ emailInvalid: true })
    }

    if (!pass.validity.valid) {
      return this.setState({ passwordInvalid: true })
    }

    if (pass.value !== confirmPass.value) {
      return this.setState({ confirmPasswordInvalid: true })
    }

    if (this.props.signUp) {
      this.props.signUp(email.value, phone.value, pass.value)
    }
  }

  resetValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target

    if (this.state[name + 'Invalid']) {
      this.setState({ [name + 'Invalid']: false })
    }
  }

  checkConfirmPass = () => {
    const pass = (this.password as HTMLInputElement).value
    const confirmPass = (this.confirmPass as HTMLInputElement).value

    if (pass !== confirmPass) {
      return this.setState({ confirmPasswordInvalid: true })
    }

    return this.setState({ confirmPasswordInvalid: false })
  }

  render() {
    const {
      hideForm,
      toggleFrom,
      error,
      loadingAuth,
      orderVersion
    } = this.props

    if (hideForm) {
      return (
        <div className={`sign-message ${orderVersion ? 'order-version' : ''}`}>
          <Button
            type="button"
            color="primary"
            className="actionButton"
            onClick={toggleFrom}
          >
            Sign up
          </Button>
        </div>
      )
    }

    return (
      <div className={`sign-form ${orderVersion ? 'order-version' : ''}`}>
        <h3 className={`bold-title ${orderVersion ? 'order-version' : ''}`}>
          Sign up
        </h3>

        <div className="mobile-titles">
          <Button color="link" className="bold-title" onClick={toggleFrom}>
            Login
          </Button>

          <Button color="link" className="bold-title active-title">
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
              required
              invalid={this.state.emailInvalid}
              onBlur={this.resetValidation}
              innerRef={ref => (this.email = ref)}
            />

            <FormFeedback>Invalid Email</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Input
              type="tel"
              name="phone"
              id="signUpPhone"
              placeholder="Mobile Phone"
              innerRef={ref => (this.phone = ref)}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="password"
              name="password"
              id="signInPassword"
              placeholder="Password"
              required
              minLength={8}
              invalid={this.state.passwordInvalid}
              onBlur={this.resetValidation}
              innerRef={ref => (this.password = ref)}
            />

            <FormFeedback>
              The password must be of minimum length 8 characters
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Input
              type="password"
              name="confirmPassword"
              id="signUpConfirmPassword"
              placeholder="Confirm password"
              required
              innerRef={ref => (this.confirmPass = ref)}
              invalid={this.state.confirmPassInvalid}
              onBlur={this.checkConfirmPass}
            />

            <FormFeedback>
              Password does not match the confirm password
            </FormFeedback>
          </FormGroup>

          {error && <p className="error-message">{error}</p>}

          <div className="form-footer">
            <Button
              type="button"
              color="primary"
              className="actionButton"
              onClick={this.submit}
              disabled={loadingAuth}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}
