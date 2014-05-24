var test           = require('tape');
var ICalDateParser = require('../index.js');

test('Date is righ', function(t) {
  t.plan(2);
  var d = new ICalDateParser('20140422T233000Z').parse();
  t.strictEqual(d.getDate(), 22);
  
  d = new ICalDateParser('20141203T012000Z').parse();
  t.strictEqual(d.getDate(), 2);
});
