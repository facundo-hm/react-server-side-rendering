import React from 'react'
import { GoogleLoginResponse } from 'react-google-login'

import {
  SignIn,
  SignUp,
  GoogleLoginSuccess,
  GoogleLoginFailure,
  User,
  SignInResponse
} from '../../../types'
import { saveJwt, getJwt, clearJwt, handleFetch } from '../../utils'

interface AuthContextInterface {
  isAuthenticated?: boolean
  user?: User
  authError?: string
  login?: SignIn
  logout?: () => void
  signup?: SignUp
  showModal?: boolean
  toggleModal?: () => void
  googleLoginSuccess?: GoogleLoginSuccess
  googleLoginFailure?: GoogleLoginFailure
  cleanError?: () => void
  loadingAuth?: boolean
}

export const { Provider, Consumer } = React.createContext<AuthContextInterface>(
  {}
)

interface AuthProps {}

interface AuthState {
  isAuthenticated: boolean
  user?: User
  authError?: string
  showModal: boolean
  loadingAuth: boolean
}

export class AuthProvider extends React.Component<AuthProps, AuthState> {
  state: AuthState = {
    isAuthenticated: false,
    showModal: false,
    loadingAuth: true
  }

  baseUrl = process.env.BASE_URL

  async componentDidMount() {
    const jwt = getJwt()
    const url = `${this.baseUrl}/api/validate-jwt`

    if (jwt) {
      const options = {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`
        }
      }

      try {
        const res = await handleFetch<{ isValid: boolean }>(url, options)

        if (res.isValid) {
          const { user } = await this.getUser(jwt)

          return this.setState({
            isAuthenticated: true,
            loadingAuth: false,
            user
          })
        }

        clearJwt()
      } catch (err) {
        clearJwt()
      }
    }

    this.setState({ loadingAuth: false })
  }

  login = async (email: string, password: string) => {
    this.setState({ loadingAuth: true })

    try {
      const url = `${this.baseUrl}/api/login`

      const options = {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await handleFetch<SignInResponse>(url, options)

      await this.manageAuthResponse(res)
    } catch (err) {
      const errorMsg = err.message || 'Incorrect Email or Password'

      this.setState({ authError: errorMsg, loadingAuth: false })
    }
  }

  signup = async (email: string, phone: string, password: string) => {
    this.setState({ loadingAuth: true })

    try {
      const url = `${this.baseUrl}/api/signup`

      const options = {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          phone
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await handleFetch<SignInResponse>(url, options)

      await this.manageAuthResponse(res)
    } catch (err) {
      const errorMsg = err.message || 'User already exists'

      this.setState({ authError: errorMsg, loadingAuth: false })
    }
  }

  googleLoginSuccess: GoogleLoginSuccess = async res => {
    this.setState({ loadingAuth: true })

    const googleRes = (res as GoogleLoginResponse).getAuthResponse()

    try {
      const url = `${this.baseUrl}/api/auth/google/verify-token`

      const options = {
        method: 'POST',
        body: JSON.stringify({
          tokenId: googleRes.id_token
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await handleFetch<SignInResponse>(url, options)

      await this.manageAuthResponse(res)
    } catch (err) {
      const errorMsg = err.message || 'Incorrect Email or Password'

      this.setState({ authError: errorMsg, loadingAuth: false })
    }
  }

  googleLoginFailure: GoogleLoginFailure = googleError => {
    if (googleError.error !== 'popup_closed_by_user') {
      this.setState({ authError: googleError.error, loadingAuth: false })
    }
  }

  manageAuthResponse = async (res: SignInResponse) => {
    const { showModal } = this.state

    saveJwt(res.token)

    this.setState({
      isAuthenticated: true,
      user: res.user,
      loadingAuth: false,
      showModal: showModal ? !showModal : showModal
    })
  }

  logout = () => {
    clearJwt()

    this.setState({ isAuthenticated: false, user: undefined })
  }

  getUser = async (jwt: string): Promise<{ user: User }> => {
    const url = `${this.baseUrl}/api/get-user`

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    }

    return await handleFetch<{ user: User }>(url, options)
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal, authError: undefined })
  }

  cleanError = () => {
    this.setState({ authError: undefined })
  }

  render() {
    const {
      isAuthenticated,
      authError,
      showModal,
      loadingAuth,
      user
    } = this.state

    return (
      <Provider
        value={{
          isAuthenticated,
          user,
          login: this.login,
          logout: this.logout,
          signup: this.signup,
          authError,
          showModal,
          toggleModal: this.toggleModal,
          googleLoginSuccess: this.googleLoginSuccess,
          googleLoginFailure: this.googleLoginFailure,
          cleanError: this.cleanError,
          loadingAuth
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export const AuthConsumer = Consumer
