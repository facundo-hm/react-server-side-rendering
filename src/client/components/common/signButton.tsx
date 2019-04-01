import React from 'react'
import { Button } from 'reactstrap'

interface Props {
  isAuthenticated?: boolean
  logOut?: () => void
  toggleModal?: () => void
}

export const SignButton = (props: Props) => {
  const { isAuthenticated, logOut, toggleModal } = props

  return isAuthenticated ? (
    <Button color="link" className="login-link" onClick={logOut}>
      Logout
    </Button>
  ) : (
    <Button color="link" className="login-link" onClick={toggleModal}>
      Login
    </Button>
  )
}
