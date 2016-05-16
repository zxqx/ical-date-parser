module.exports = iCalDateParser;

/**
 * Parse a stringly typed iCal formatted date into a native JS date object
 * @param {string} date
 * @return {Date}
 */
function iCalDateParser(date)
{
  if (!date) {
    throw new Error('No date specified');
  }

  if (!validateFormat(date)) {
    throw new Error('Not an iCal formatted date');
  }

  const year = date.substr(0, 4);
  const month = parseInt(date.substr(4, 2), 10) - 1;
  const day = date.substr(6, 2);
  const hour = date.substr(9, 2);
  const minute = date.substr(11, 2);
  const second = date.substr(13, 2);

  return new Date(Date.UTC(year, month, day, hour, minute, second));
}

/**
 * Check whether or not a given date is a valid iCal formatted date
 * @param {string} date
 * @return {boolean}
 */
function validateFormat(date)
{
  const T_INDEX = 8;
  const Z_INDEX = 15;

  const d = date.split('');

  if (!d instanceof String) return false;
  if (d.length !== 16) return false;
  if (d[T_INDEX] !== 'T') return false;
  if (d[Z_INDEX] !== 'Z') return false;

  return d
    .filter((x, i) => i !== T_INDEX && i !== Z_INDEX)
    .every((x, i) => !isNaN(parseInt(x)));
}
