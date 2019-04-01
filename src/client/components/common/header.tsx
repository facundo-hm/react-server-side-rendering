import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { NavbarMobile } from './navbarMobile'
import { SignModal } from './signModal'
import { AuthConsumer } from './authContext'
import { SignButton } from './signButton'

export const Header = () => (
  <header>
    <AuthConsumer>
      {({ isAuthenticated, logout, toggleModal }) => (
        <div className="container nav-container">
          <div className="home-link">
            <Link to="/">Home</Link>
          </div>

          <nav className="nav">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>

            <NavLink
              to="/products"
              className="nav-link"
              activeClassName="active"
            >
              Products
            </NavLink>

            <NavLink to="/faq" className="nav-link" activeClassName="active">
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>

            <SignButton
              isAuthenticated={isAuthenticated}
              logOut={logout}
              toggleModal={toggleModal}
            />
          </nav>

          <NavbarMobile
            isAuthenticated={isAuthenticated}
            logOut={logout}
            toggleModal={toggleModal}
          />

          <SignModal toggleModal={toggleModal} />
        </div>
      )}
    </AuthConsumer>
  </header>
)
