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
