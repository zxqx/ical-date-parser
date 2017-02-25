# ical-date-parser

Parse a stringly typed [iCal date](http://www.kanzaki.com/docs/ical/dateTime.html) as a native JS date object.

[![Circle CI](https://circleci.com/gh/zakangelle/ical-date-parser/tree/master.svg?style=shield)](https://circleci.com/gh/zakangelle/ical-date-parser/tree/master) [![Coverage Status](https://img.shields.io/coveralls/zakangelle/ical-date-parser.svg)](https://coveralls.io/github/zakangelle/ical-date-parser?branch=master)

## Installation

```
$ npm install ical-date-parser
```

## Usage

```js
import iCalDateParser from 'ical-date-parser';
```

```js
iCalDateParser('20140422T233000Z');
```

## Development

Install dependencies:

```
$ npm install
```

Run the example app at [http://localhost:8080](http://localhost:8080):

```
$ npm run example
```

Run tests using [jest](https://github.com/facebook/jest):

```
$ npm test
```

Run tests and watch for code changes:

```
$ npm run test:watch
```

## License

MIT
