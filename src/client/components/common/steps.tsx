import React from 'react'

import { Step } from '../../../types'

interface Props {
  steps: Step[]
}

export const Steps = (props: Props) => (
  <ul className="steps-container">
    {props.steps.map((step, index) => {
      return (
        <li key={index} className="step">
          <span className="bold-title">0{1 + index}</span>

          <div>
            {step.title && <h6 className="bold-title">{step.title}</h6>}
            <p>{step.description}</p>
          </div>
        </li>
      )
    })}
  </ul>
)
