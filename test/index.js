/* global it */

'use strict'

const should = require('should')
const createClient = require('..')
const env = process.env.NODE_ENV || 'development'
const log = env === 'development' ? console.log : function () {}

it('works fine', function (done) {
  const merkawind = createClient({
    key: process.env.API_KEY,
    pages: 2,
    sold: true
  })

  const ads = merkawind.boards()

  let count = 0

  ads.on('data', function (data) {
    data.should.be.an.Object()
    ;[
      ['title', String],
      ['price', Number],
      ['link', String],
      ['image', String],
      ['createdAt', Number]
    ].forEach(function (pair) {
      const prop = pair[0]
      const type = pair[1]
      data.should.have.property(prop)
      data[prop].should.be.a[type.name]()
    })

    const {title, link} = data
    log(`${++count}: ${title} ${link}`)
  })

  ads.on('end', function () {
    count.should.be.equal(20)
    done()
  })

  ads.on('error', done)
})
