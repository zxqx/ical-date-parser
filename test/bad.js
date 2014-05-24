var test           = require('tape');
var ICalDateParser = require('../index.js');

test('Null throws error', function(t) {
  t.plan(1);
  t.throws(function() {
    new ICalDateParser(null).parse();
  });
});

test('Undefined throws error', function(t) {
  t.plan(1);
  t.throws(function() {
    new ICalDateParser(undefined).parse();
  });
});

test('Empty string throws error', function(t) {
  t.plan(1);
  t.throws(function() {
    new ICalDateParser('').parse();
  });
});

test('Invalid input format', function(t) {
  t.plan(6);
  t.throws(function() {
    new ICalDateParser('20140422X233000Z').parse();
  });

  t.throws(function() {
    new ICalDateParser('20140422T233000Y').parse();
  });
  
  t.throws(function() {
    new ICalDateParser('1994-11-05T08:15:30-05:00').parse();
  });

  t.throws(function() {
    new ICalDateParser('asdfgjfhgjkdfhsg').parse();
  });

  t.throws(function() {
    new ICalDateParser('919191919191919197').parse();
  });

  t.throws(function() {
    new ICalDateParser('butt').parse();
  });
});
