/**
 * Return a number abbreviated.
 * @param {number} number - Number to be abbreviated.
 */
export function abbreviateNumber(number) {
  if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(2) + ' K';
  }

  if (number >= 1000000 && number < 1000000000) {
    return (number / 1000000).toFixed(2) + ' M';
  }

  if (number >= 1000000000 && number < 1000000000000) {
    return (number / 1000000000).toFixed(2) + ' B';
  }

  return `${number}`;
}