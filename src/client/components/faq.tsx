import React from 'react'

import { CollapsibleList } from './common'

const faqList = [
  {
    title: 'Question one',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.'
  },
  {
    title: 'Question two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.'
  },
  {
    title: 'Question three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.'
  },
  {
    title: 'Question four',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.'
  }
]

export const Faq = () => (
  <div className="header-division section-container">
    <div className="container section about">
      <h1 className="bold-title">FAQ</h1>

      <CollapsibleList list={faqList} />
    </div>
  </div>
)
