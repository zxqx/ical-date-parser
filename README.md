# ical-date-parser

Provides a simple class for parsing [iCal formatted dates](http://www.kanzaki.com/docs/ical/dateTime.html) into native Date objects.

[![Build Status](https://travis-ci.org/zakangelle/ical-date-parser.png?branch=master)](https://travis-ci.org/zakangelle/ical-date-parser)
[![NPM version](https://badge.fury.io/js/ical-date-parser.svg)](http://badge.fury.io/js/ical-date-parser)

[![browser support](https://ci.testling.com/zakangelle/ical-date-parser.png)
](https://ci.testling.com/zakangelle/ical-date-parser)

## Installation

```
$ npm install ical-date-parser
```

## Usage

```js
var ICalDateParser = require('ical-date-parser');

new ICalDateParser(icalDate).parse();
```

## Test

Tests are done with `tape` by running:

```
$ npm test
```
