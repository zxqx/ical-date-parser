module.exports = ICalDateParser;

function ICalDateParser(d)
{
  this._date      = d;
  this.parsedDate = null;
}

ICalDateParser.prototype.parse = function()
{
  var date = this._date;

  if (!date) throw 'No date specified';
  if (!validFormat(date)) throw 'Invalid format';

  var year   = date.substr(0, 4);
  var month  = parseInt(date.substr(4, 2), 10) -1;
  var day    = date.substr(6, 2);
  var hour   = date.substr(9, 2);
  var minute = date.substr(11, 2);
  var second = date.substr(13, 2);

  this.parsedDate = new Date(Date.UTC(year, month, day, hour, minute, second));
  
  return this.parsedDate;
};

function validFormat(date)
{
  var T_INDEX = 8;
  var Z_INDEX = 15;

  var d = date.split('');

  if (!d instanceof String) return false;
  if (d.length !== 16) return false;
  if (d[T_INDEX] !== 'T') return false;
  if (d[Z_INDEX] !== 'Z') return false;

  return d.every(function(char, i) {
    if (i !== T_INDEX && i !== Z_INDEX && isNaN(parseInt(char))) return false; 
    else return true;
  });
}
