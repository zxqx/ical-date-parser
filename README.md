# ical-date-parser

Provides a simple class for parsing [iCal formatted dates](http://www.kanzaki.com/docs/ical/dateTime.html) into native Date objects.

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
