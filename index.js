module.exports = ICalDateParser;

function ICalDateParser(d)
{
  this._date      = d;
  this.parsedDate = null;
}

ICalDateParser.prototype.parse = function()
{
  var date = this._date;

  var year   = date.substr(0, 4);
  var month  = parseInt(date.substr(4, 2), 10) -1;
  var day    = date.substr(6, 2);
  var hour   = date.substr(9, 2);
  var minute = date.substr(11, 2);
  var second = date.substr(13, 2);

  this.parsedDate = new Date(Date.UTC(year, month, day, hour, minute, second));
  
  return this.parsedDate;
};
