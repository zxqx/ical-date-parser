const T_INDEX = 8;
const Z_INDEX = 15;

/**
 * Parse a stringly typed iCal formatted date as a native JS date object
 * @param {string} date
 * @return {Date}
 */
export default function iCalDateParser(date) {
  if (!_validateFormat(date)) {
    throw new Error('Not a valid iCal date format');
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
 * @private
 */
function _validateFormat(date) {
  const d = date.split('');

  if (d.length !== 16) return false;
  if (d[T_INDEX] !== 'T') return false;
  if (d[Z_INDEX] !== 'Z') return false;

  return d
    .filter((x, i) => i !== T_INDEX && i !== Z_INDEX)
    .every(x => !isNaN(parseInt(x)));
}
