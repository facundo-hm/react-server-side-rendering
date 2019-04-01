import React from 'react'

import { Services } from '../../../types'

export const productsData: Services = {
  productOne: {
    imageClass: 'product-hero',
    title: <p className="bold-title">Product One</p>,
    titleString: 'Product Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.',
    price: 'Price',
    type: 'evaluate-my-case'
  },
  productTwo: {
    imageClass: 'product-hero',
    title: <p className="bold-title">Product Two</p>,
    titleString: 'Product Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.',
    price: 'Price',
    type: 'draft-and-represent-me'
  }
}

export const productsId = Object.keys(productsData)

export const stepsData = [
  {
    title: 'Step title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem.'
  },
  {
    title: 'Step title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem.'
  },
  {
    title: 'Step title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem.'
  }
]
