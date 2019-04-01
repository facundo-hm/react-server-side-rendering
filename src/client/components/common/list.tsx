import React from 'react'

interface Props {
  items: Array<string | JSX.Element>
}

export const List = (props: Props) => (
  <ul className="list-container">
    {props.items.map((item, i) => (
      <li key={i}>{typeof item === 'string' ? <p>{item}</p> : item}</li>
    ))}
  </ul>
)
