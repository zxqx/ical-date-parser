var test           = require('tape');
var iCalDateParser = require('../index.js');

test('Month gets parsed correctly', function(t) {
  t.plan(2);
  var d = iCalDateParser('20140422T233000Z');
  t.strictEqual(d.getUTCMonth(), 3);
  
  d = iCalDateParser('20141223T012000Z');
  t.strictEqual(d.getUTCMonth(), 11);
});
