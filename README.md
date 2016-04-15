# ical-date-parser

Parse a stringly typed [iCal formatted date](http://www.kanzaki.com/docs/ical/dateTime.html) into a native JS date object.

[![Circle CI](https://circleci.com/gh/zakangelle/ical-date-parser/tree/master.svg?style=shield)](https://circleci.com/gh/zakangelle/ical-date-parser/tree/master)

## Installation

```
$ npm install ical-date-parser
```

## Usage

```js
import iCalDateParser from 'ical-date-parser';

iCalDateParser('20140422T233000Z');
```

## Standalone

Generate a standalone build in `dist` (for use with `<script>` tags and AMD module loaders):

```sh
$ npm run build:standalone
```

## Test

Tests are done with [tape](https://github.com/substack/tape) by running:

```
$ npm test
```
