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
 * @param {string, num} 接收字符串string，截取字符长度为num的字符串
 * @return {string} 返回字符串,字符长度为num.
 * @customfunction
 */

function cutBytes(str, num) {
  let myStr = '';
  if(str && typeof str === 'string') {
    myStr = str;
  }
  let myNum = 0;
  if(num && typeof num === 'number') {
    myNum = num;
  }
  let tmpStr='';
  if (myStr) {
    let tmpNum=0;
    for (let i=0; i< myStr.length; i++) {
      if (isByteChar(myStr.charCodeAt(i))) {
        tmpNum +=1;
      } else {
        tmpNum +=2;
      }
      if (tmpNum > myNum) {
        return myStr.substr(0, i);
      }
    }
  }
  return myStr;
}

module.exports = cutBytes;
