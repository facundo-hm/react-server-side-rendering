import React from 'react'
import { StaticRouter } from 'react-router-dom'

import App from './App'

export const Routes = (props: any) => (
  <StaticRouter context={{}} location={props.url}>
    <App />
  </StaticRouter>
)
