import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

interface Props {
  title: string
  description: string
  price: string
  link?: string
}

export const ProductCard = (props: Props) => (
  <div className="card product-card">
    <div className="card-body">
      <div className="header-container">
        <div className="title-container">
          <h6 className="title bold-title">{props.title}</h6>
        </div>

        <div className="price-container">
          <h2 suppressHydrationWarning className="price bold-title">
            ${props.price}
          </h2>
        </div>
      </div>

      <p className="card-text">{props.description}</p>

      <Link to={props.link ? props.link : '#'}>
        <Button color="primary" className="actionButton">
          Start now
        </Button>
      </Link>
    </div>
  </div>
)
