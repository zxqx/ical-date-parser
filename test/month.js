var test           = require('tape');
var ICalDateParser = require('../index.js');

test('Month is right', function(t) {
  t.plan(2);
  var d = new ICalDateParser('20140422T233000Z').parse();
  t.strictEqual(d.getUTCMonth(), 3);
  
  d = new ICalDateParser('20141223T012000Z').parse();
  t.strictEqual(d.getUTCMonth(), 11);
});
