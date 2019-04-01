import React from 'react'

import { Hero, ProductCard, productsData, productsId } from './common'

export const Home = () => (
  <div className="section-container">
    <Hero
      backgroundClass="home-hero"
      title={<p className="bold-title">Products</p>}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis."
      buttonText="Learn more"
      link="/products"
    />

    <div className="container">
      <div className="product-title">
        <h2>Main Products</h2>
        <span className="trustpilot-icon" />
      </div>

      <div className="products-contatiner">
        {productsId.map((id, i) => (
          <ProductCard
            key={i}
            title={productsData[id].titleString}
            price={productsData[id].price}
            description={productsData[id].description}
            link={`/product/${id}`}
          />
        ))}
      </div>
    </div>
  </div>
)
