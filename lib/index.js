'use strict'

const createStream = require('./req-stream')

const namespace = {
  boards: 'ofertatablaswindsurf',
  sails: 'ofertavelaswindsurf'
}

function createClient (opts) {
  const client = createStream(opts)

  Object.keys(namespace).forEach(function (key) {
    const path = namespace[key]
    client[key] = client.bind(null, {path})
  })

  return client
}

module.exports = createClient
