var test = require('tape');
var iCalDateParser = require('../index.js');

test('Date gets parsed correctly', function(t) {
  t.plan(2);
  var d = iCalDateParser('20140422T233000Z');
  t.strictEqual(d.getUTCDate(), 22);

  d = iCalDateParser('20141203T012000Z');
  t.strictEqual(d.getUTCDate(), 3);
});
