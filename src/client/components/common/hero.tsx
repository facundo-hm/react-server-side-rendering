import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

interface Props {
  backgroundClass: string
  title: JSX.Element
  description: string
  price?: string
  buttonText: string
  link?: string
}

export const Hero = (props: Props) => (
  <div className={`${props.backgroundClass} hero-container`}>
    <div className="container hero">
      <div className="header-container">
        <div className="title-container">
          <h1>{props.title}</h1>

          {props.price && (
            <div className="price-container">
              <h2 suppressHydrationWarning className="price bold-title">
                ${props.price}
              </h2>
            </div>
          )}
        </div>

        {props.price && <span className="trustpilot-icon" />}
      </div>

      <p>{props.description}</p>

      <Link to={props.link ? props.link : '#'}>
        <Button color="primary" className="actionButton">
          {props.buttonText}
        </Button>
      </Link>
    </div>
  </div>
)
