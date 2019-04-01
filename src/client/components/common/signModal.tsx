import React from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'

import { SignContainer } from './signContainer'
import { AuthConsumer } from './authContext'

interface Props {
  toggleModal?: () => void
}

interface State {
  modal: boolean
  showLoginForm: boolean
}

export class SignModal extends React.Component<Props, State> {
  state: State = {
    modal: false,
    showLoginForm: true
  }

  toggleSignForm = (showLoginForm: boolean) => {
    this.setState({ showLoginForm })
  }

  toggleModal = () => {
    if (this.props.toggleModal) {
      this.props.toggleModal()
    }

    this.setState({ showLoginForm: true })
  }

  render() {
    const { showLoginForm } = this.state

    return (
      <AuthConsumer>
        {({ showModal, cleanError }) => (
          <Modal
            isOpen={showModal}
            toggle={this.toggleModal}
            className="sign-modal"
          >
            <ModalBody>
              <Button
                color="link"
                className={
                  showLoginForm
                    ? 'close-button'
                    : 'close-button close-black-icon'
                }
                onClick={this.toggleModal}
              />

              <SignContainer
                cleanError={cleanError}
                toggleFormCallback={this.toggleSignForm}
              />
            </ModalBody>
          </Modal>
        )}
      </AuthConsumer>
    )
  }
}
