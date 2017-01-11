'use strict'

const transform = {
  // because first char is a symbol
  price: (item) => Math.trunc(item.price.substring(1).replace(',', '')),
  createdAt: require('./date')
}

function normalize (item) {
  Object.keys(transform).forEach(function (key) {
    const fn = transform[key]
    item[key] = fn(item)
  })

  return item
}

module.exports = normalize
