import React from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import { SignButton } from './signButton'

interface Props {
  isAuthenticated?: boolean
  logOut?: () => void
  toggleModal?: () => void
}

export class NavbarMobile extends React.Component<Props> {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const { isAuthenticated, logOut, toggleModal } = this.props
    return (
      <div>
        <Button color="link" className="menu-botton" onClick={this.toggle} />

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="menu-mobile"
          backdropClassName="backdrop-menu-mobile"
        >
          <ModalBody>
            <nav className="nav flex-column">
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="active-link"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active-link"
              >
                About
              </NavLink>

              <NavLink
                to="/products"
                className="nav-link"
                activeClassName="active-link"
              >
                Products
              </NavLink>

              <NavLink
                to="/faq"
                className="nav-link"
                activeClassName="active-link"
              >
                FAQ
              </NavLink>

              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active-link"
              >
                Contact
              </NavLink>
            </nav>

            <SignButton
              isAuthenticated={isAuthenticated}
              logOut={logOut}
              toggleModal={toggleModal}
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
