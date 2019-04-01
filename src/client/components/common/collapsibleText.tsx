import React from 'react'
import { UncontrolledCollapse, Button } from 'reactstrap'

interface Props {
  id: string
  title: string
  description: string | JSX.Element
}

export const CollapsibleText = (props: Props) => (
  <div className="collapsible-text">
    <UncontrolledCollapse toggler={`#${props.id}`}>
      <div className="description">{props.description}</div>
    </UncontrolledCollapse>

    <Button id={props.id} color="link" className="bold-title">
      {props.title}
    </Button>
  </div>
)
