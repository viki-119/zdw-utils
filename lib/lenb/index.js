/**
 * Is the given character a byte length?
 * @param {string} {ch} a character to be examined.
 * @return {boolean} True if the given letter is a byte width.
 * @private
 */
function isByteChar(ch) {
  return ch < 128;
}

/**
 * Counts the given text.
 * @return {number} an integer value.
 * @private
 */
function lengthOfText(str, predicate) {
  let len = 0;
  if (str && typeof str === 'string' ) {
    len = str.length;
    for (let i = 0; i < str.length; i++) {
      if (!predicate(str.charCodeAt(i))) {
        len += 1;
      }
    }
  }
  return len;
}

/**
 * Returns the number of bytes used to represent the characters in a text string.
 *
 * @param {string} text The text which length you want to find. Spaces count as characters.
 * @return {string} the number of bytes in a text.
 * @customfunction
 */
function lenb(str) {
  // @summary Returns the number of bytes in a text.
  return lengthOfText(str, isByteChar);
}

module.exports = lenb;
