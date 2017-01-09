'use strict'

const transform = {
  // because first char is a symbol
  price: (str) => Math.trunc(str.substring(1))
}

function normalize (item) {
  Object.keys(transform).forEach(function (key) {
    const fn = transform[key]
    item[key] = fn(item[key])
  })

  return item
}

module.exports = normalize
