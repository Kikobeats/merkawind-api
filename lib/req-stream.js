'use strict'

const normalize = require('./normalize')
const CONST = require('./constants')
const from = require('from2').obj
const got = require('got')

const fetch = (opts) => got.get(CONST.ENDPOINT, opts)

function createStream (opts) {
  function reqStream (query) {
    Object.assign(query, {wrapAPIKey: opts.key})
    const fetchOpts = {json: true, query: query}
    let currentPage = 0
    const hasFetch = () => currentPage < opts.pages

    const stream = from(function (size, next) {
      if (!hasFetch()) return next(null, null)

      fetch(fetchOpts)
        .then(res => {
          const {body} = res

          if (!body.success) return next(body.messages)

          const {data} = body
          const {ads} = data
          const lastAd = ads.pop()

          ads.forEach(topic => {
            normalize(topic)
            this.push(topic)
          })

          ++currentPage
          return next(null, normalize(lastAd))
        })
        .catch(next)
    })

    return stream
  }

  return reqStream
}

module.exports = createStream
