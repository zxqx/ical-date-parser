var test           = require('tape');
var ICalDateParser = require('../index.js');

var ICAL_DATE = '20140422T233000Z';
var PARSED    = new ICalDateParser(ICAL_DATE).parse();

test('parse', function(t) {
  t.plan(1);
  if (PARSED instanceof Date) t.pass('parse passed');
});

test('getMonth', function(t) {
  t.plan(1);
  if (!isNaN(PARSED.getMonth())) t.pass('getMonth passed');
});

test('getDate', function(t) {
  t.plan(1);
  if (!isNaN(PARSED.getDate())) t.pass('getDate passed');
});

test('getHours', function(t) {
  t.plan(1);
  if (!isNaN(PARSED.getHours())) t.pass('getHours passed');
});

test('getMinutes', function(t) {
  t.plan(1);
  if (!isNaN(PARSED.getMinutes())) t.pass('getMinutes passed');
});
