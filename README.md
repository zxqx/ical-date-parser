# ical-date-parser

Provides a simple class for parsing [iCal formatted dates](http://www.kanzaki.com/docs/ical/dateTime.html) into native Date objects.

[![Build Status](https://travis-ci.org/zakangelle/ical-date-parser.png?branch=master)](https://travis-ci.org/zakangelle/ical-date-parser)

[![browser support](https://ci.testling.com/zakangelle/ical-date-parser.png)
](https://ci.testling.com/zakangelle/ical-date-parser)

## Installation

```
$ npm install ical-date-parser
```

## Usage

```js
var ICalDateParser = require('ical-date-parser');

new ICalDateParser('20140422T233000Z').parse();

// output
'2014-04-22T23:30:00.000Z'
```

## Test

Tests are done with [tape](https://github.com/substack/tape) by running:

```
$ npm test
```
