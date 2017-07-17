# merkawind-api

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/merkawind-api.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/merkawind-api.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/merkawind-api/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/merkawind-api)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/merkawind-api.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/merkawind-api)
[![Dependency status](http://img.shields.io/david/Kikobeats/merkawind-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/merkawind-api)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/merkawind-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/merkawind-api#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/merkawind-api.svg?style=flat-square)](https://www.npmjs.org/package/merkawind-api)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Programatic API access for merkawind.com

## Install

```bash
$ npm install merkawind-api --save
```

## Usage

```js
const createMerkawindClient = require('merkawind-api')

const merkawind = createMerkawindClient({
  key: process.env.API_KEY, // API Key credentials
  pages: 3, // Numbers or request per each method call [default=Infinity]
  sold: false // Determinate if add or not sold items [default=false]
})
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
