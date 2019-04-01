import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  text: string
  link: string
}

export const ActionLink = (props: Props) => (
  <Link to={props.link} className="action-link">
    <span className="text">{props.text}</span>

    <span className="icon-container">
      <span className="icon" />
    </span>
  </Link>
)
