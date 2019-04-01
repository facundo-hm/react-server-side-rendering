import React from 'react'

import { CollapsibleText } from './collapsibleText'

interface List {
  title: string
  description: string | JSX.Element
}

interface Props {
  list: List[]
}

export const CollapsibleList = (props: Props) => (
  <ul className="steps-container">
    {props.list.map((faq, index) => {
      const num = 1 + index

      return (
        <li key={index} className="step">
          <span className="bold-title">{num < 10 ? `0${num}` : num}</span>

          <CollapsibleText
            id={`faq-0${num}`}
            title={faq.title}
            description={faq.description}
          />
        </li>
      )
    })}
  </ul>
)
