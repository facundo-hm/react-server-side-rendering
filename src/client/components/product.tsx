import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Hero, Steps, productsData, stepsData } from './common'

interface RouteProps {
  id: string
}

interface Props extends RouteComponentProps<RouteProps> {}

export const Product = (props: Props) => {
  const { id } = props.match.params
  const product = productsData[id]

  return (
    <div className="section-container">
      <Hero
        backgroundClass={product.imageClass}
        title={product.title}
        description={product.description}
        price={product.price}
        buttonText="Start now"
      />

      <div className="container">
        <Steps steps={stepsData} />
      </div>
    </div>
  )
}
