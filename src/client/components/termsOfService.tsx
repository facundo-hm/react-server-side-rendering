import React from 'react'

import { CollapsibleList, List } from './common'

const refundList = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.',

  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.',

  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.',

  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.'
]

const list = [
  {
    title: 'Title',
    description: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis.{' '}
          <span className="bold-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas
            id ornare magna. Curabitur hendrerit augue massa, posuere iaculis
            mauris iaculis mattis.
          </span>{' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis.
        </p>

        <h6 className="bold-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget
          lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa,
          posuere iaculis mauris iaculis mattis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis.
        </p>
      </div>
    )
  },
  {
    title: 'Title',
    description: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis.
        </p>

        <h6 className="bold-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis.
        </p>

        <h6 className="bold-title">Lorem ipsum dolor sit amet.</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget
          lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa,
          posuere iaculis mauris iaculis mattis.
        </p>

        <h6 className="bold-title">Lorem ipsum dolor sit amet.</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id
          ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris
          iaculis mattis.
        </p>

        <List items={refundList} />
      </div>
    )
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.'
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis mattis.'
  }
]

export const TermsOfService = () => (
  <div className="header-division section-container">
    <div className="container section">
      <h1 className="bold-title">Terms of Service</h1>

      <h5 className="bold-title">Terms of Service</h5>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh
        massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare
        magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis
        mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nibh massa, tincidunt ut sodales a, ultricies eget lorem.
        Maecenas id ornare magna. Curabitur hendrerit augue massa, posuere
        iaculis mauris iaculis mattis.
      </p>

      <CollapsibleList list={list} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh
        massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare
        magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis
        mattis.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh
        massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare
        magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis
        mattis.
      </p>
    </div>
  </div>
)
