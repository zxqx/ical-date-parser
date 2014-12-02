var test           = require('tape');
var iCalDateParser = require('../index.js');

test('Null throws error', function(t) {
  t.plan(1);
  t.throws(function() {
    iCalDateParser(null);
  });
});

test('Undefined throws error', function(t) {
  t.plan(1);
  t.throws(function() {
    iCalDateParser(undefined);
  });
});

test('Empty string throws error', function(t) {
  t.plan(1);
  t.throws(function() {
    iCalDateParser('');
  });
});

test('Invalid input format throws error', function(t) {
  t.plan(7);
  t.throws(function() {
    iCalDateParser('20140422X233000Z');
  });

  t.throws(function() {
    iCalDateParser('20140422T233000Y');
  });

  t.throws(function() {
    iCalDateParser('20a40422T233000Z');
  });
  
  t.throws(function() {
    iCalDateParser('1994-11-05T08:15:30-05:00');
  });

  t.throws(function() {
    iCalDateParser('asdfgjfhgjkdfhsg');
  });

  t.throws(function() {
    iCalDateParser(919191919191919197);
  });

  t.throws(function() {
    iCalDateParser('butt');
  });
});
