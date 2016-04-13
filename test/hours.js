var test = require('tape');
var iCalDateParser = require('../index.js');

test('Hour gets parsed correctly', function(t) {
  t.plan(2);
  var d = iCalDateParser('20140422T233000Z');
  t.strictEqual(d.getUTCHours(), 23);

  d = iCalDateParser('20141203T012000Z');
  t.strictEqual(d.getUTCHours(), 1);
});
