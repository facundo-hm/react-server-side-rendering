import { expect, request, use } from 'chai'
import chaiHttp from 'chai-http'

import app from '../../src/app'

use(chaiHttp)

describe('Get Index', () => {
  it('Should get index page', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })
})
