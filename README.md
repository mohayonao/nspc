# nspc
[![Build Status](http://img.shields.io/travis/mohayonao/nspc.svg?style=flat-square)](https://travis-ci.org/mohayonao/nspc)
[![NPM Version](http://img.shields.io/npm/v/nspc.svg?style=flat-square)](https://www.npmjs.org/package/nspc)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> simplest namespace generator

## Installation

```
$ npm install nspc
```

## API

`nspc(namespace: string, [ root: object ]): object`

## Examples

create a nested namespace object

```js
const nspc = require("nspc");

const Collections = nspc("System.Generic.Collections");
const System = nspc("System");

assert.equal(System.Generic.Collections, Collections);
```

with root object

```js
const nspc = require("nspc");
const target = {};

const Collections = nspc("System.Generic.Collections", target);

assert.deepEqual(target.System.Generic.Collections, {});
```

global namespace

```js
const nspc = require("nspc/global");

const Collections = nspc("System.Generic.Collections");

assert.deepEqual(global.System.Generic.Collections, {});
```

## License
MIT
