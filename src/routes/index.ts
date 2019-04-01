import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import { Routes } from '../client/serverRouts'

const router = express.Router()

router.get('/', function(req, res, next) {
  const app = renderToString(React.createElement(Routes, { url: req.baseUrl }))

  res.render('index', {
    app
  })
})

export default router
