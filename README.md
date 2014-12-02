# ical-date-parser

Parse a stringly typed [iCal formatted date](http://www.kanzaki.com/docs/ical/dateTime.html) into a native JS date object.

[![Build Status](https://travis-ci.org/zakangelle/ical-date-parser.png?branch=master)](https://travis-ci.org/zakangelle/ical-date-parser)

[![browser support](https://ci.testling.com/zakangelle/ical-date-parser.png)
](https://ci.testling.com/zakangelle/ical-date-parser)

## Installation

```
$ npm install ical-date-parser
```

## Usage

```js
var iCalDateParser = require('ical-date-parser');

iCalDateParser('20140422T233000Z');

// output
'2014-04-22T23:30:00.000Z'
```

## Test

Tests are done with [tape](https://github.com/substack/tape) by running:

```
$ npm test
```
