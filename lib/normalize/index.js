'use strict'

const transform = {
  price: (item) => {
    const {price} = item
    // because first char is a symbol
    const floatPrice = price.substring(1).replace(',', '')
    const integerPrice = Math.trunc(floatPrice)
    return integerPrice
  },
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
