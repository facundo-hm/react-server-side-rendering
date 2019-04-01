import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import { Steps } from './common'
import { Step } from '../../types'

interface Props {
  id: string
  title: JSX.Element
  description: string
  price: string
  steps: Step[]
}

const ServiceDetail = (props: Props) => (
  <div className="service-detail">
    <div className="header-container">
      <div>
        <h3 className="title">{props.title}</h3>

        <div className="price-container">
          <h2 suppressHydrationWarning className="price bold-title">
            ${props.price}
          </h2>
        </div>
      </div>

      <div className="trustpilot-container">
        <span className="trustpilot-icon" />
      </div>

      <div>
        <Link to={`/product/${props.id}`}>
          <Button type="button" color="primary" className="btn actionButton">
            Start now
          </Button>
        </Link>
      </div>
    </div>

    <p>{props.description}</p>

    <Link to={`/product/${props.id}`}>
      <Button type="button" color="primary" className="btn actionButton">
        Start now
      </Button>
    </Link>

    <Steps steps={props.steps} />
  </div>
)

export default ServiceDetail
