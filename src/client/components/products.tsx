import React from 'react'

import { stepsData, productsData, productsId } from './common'
import ServiceDetail from './productDetail'

export const Products = () => (
  <div className="header-division section-container">
    <div className="container section services">
      <h1 className="bold-title">Products</h1>

      {productsId.map((id, i) => (
        <ServiceDetail
          key={i}
          id={id}
          title={productsData[id].title}
          description={productsData[id].description}
          price={productsData[id].price}
          steps={stepsData}
        />
      ))}
    </div>
  </div>
)
