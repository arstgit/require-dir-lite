# Require-dir-lite

[![Build Status](https://travis-ci.org/derekchuank/require-dir-lite.svg?branch=master)](https://travis-ci.org/derekchuank/require-dir-lite)
[![npm version](https://badge.fury.io/js/require-dir-lite.svg)](http://badge.fury.io/js/require-dir-lite)

## Super simple to use

A helper to `require()` one directory recursively with no configuration params.

## Installation

```
npm install require-dir-lite
```

## Usage

There is only one param(default: `'.'`) you would concern: the directory path.

```js
let requireDir = require("require-dir-lite");
let dir = requireDir("./somewhere");
```

Given this directory structure:

```
dir
+ a.js
+ b.json
+ c
  +c-1.js
  +.dumb.js
+ d.txt
```

`requireDir('./dir')` will return the equivalent of:

```js
{
  a: require('./dir/a.js'),
  b: require('./dir/b.json'),
  c: {
    c-1: require('./dir/c/c-1.js')
  }
}
```
