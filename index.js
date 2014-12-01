module.exports = ICalDateParser;

/**
 * @constructor
 * @param {string} d
 */
function ICalDateParser(d)
{
  this._date      = d;
  this.parsedDate = null;
}

/**
 * Parse a stringly typed iCal formatted date into a native JS date object
 * @return {Date}
 */
ICalDateParser.prototype.parse = function()
{
  var date = this._date;

  if (!date) throw 'No date specified';
  if (!validateFormat(date)) throw 'Invalid format';

  var year   = date.substr(0, 4);
  var month  = parseInt(date.substr(4, 2), 10) -1;
  var day    = date.substr(6, 2);
  var hour   = date.substr(9, 2);
  var minute = date.substr(11, 2);
  var second = date.substr(13, 2);

  this.parsedDate = new Date(Date.UTC(year, month, day, hour, minute, second));
  
  return this.parsedDate;
};

/**
 * Check whether or not a given date is a valid iCal formatted date
 * @param {string} date
 * @return {boolean}
 */
function validateFormat(date)
{
  var T_INDEX = 8;
  var Z_INDEX = 15;

  var d = date.split('');

  // Some basic checking
  if (!d instanceof String) return false;
  if (d.length !== 16) return false;
  if (d[T_INDEX] !== 'T') return false;
  if (d[Z_INDEX] !== 'Z') return false;

  // Return false if any of the expected numbers aren't numbers
  return d.every(function(char, i) {
    var charNotNumber = i !== T_INDEX && i !== Z_INDEX && isNaN(parseInt(char));
    if (charNotNumber) {
      return false; 
    } 
    return true;
  });
}
