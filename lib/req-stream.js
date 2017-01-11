'use strict'

const normalize = require('./normalize')
const CONST = require('./constants')
const from = require('from2').obj
const got = require('got')

const fetch = (opts) => got.get(CONST.ENDPOINT, opts)

const DEFAULT = {
  sold: false
}

function createStream (opts) {
  opts = Object.assign({}, DEFAULT, opts)

  function reqStream (query) {
    Object.assign(query, {wrapAPIKey: opts.key, page: 1})
    const fetchOpts = {json: true, query: query}
    const hasFetch = () => query.page - 1 < opts.pages

    const stream = from(function (size, next) {
      if (!hasFetch()) return next(null, null)

      fetch(fetchOpts)
        .then(res => {
          const {body} = res

          if (!body.success) return next(body.messages)

          const {data} = body
          const ads = opts.sold ? data.ads : data.ads.filter(item => !(item.sold))
          const lastAd = ads.pop()

          ads.forEach(topic => {
            normalize(topic)
            this.push(topic)
          })

          ++query.page
          return next(null, normalize(lastAd))
        })
        .catch(next)
    })

    return stream
  }

  return reqStream
}

module.exports = createStream
