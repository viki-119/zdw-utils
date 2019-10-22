/**
 * @param {string} str null undefined object  boolean and others .
 * @return {string} param switch to string
 */
 // str may be null undefined '' and so on;
function myStr(str) {
  const tmpStr="";
  if (str && typeof str === 'string') {
    return str;
  }
  return tmpStr;
}

/**
 * @param {}
 * @return {} get number
 */
 // str may be null undefined '' and so on;
function myNum(num) {
  // !isNaN([123]) // true
  // !isNaN(['123']) // true
  // !isNaN(['123hhhh']) // false
  // !isNaN(null) // true null是数值
  // !isNaN('123hh') // false
  // !isNaN(undefined) // false
  // Number([123]) // 123
  // Number(['123']) // 123
  // Number(null) // 0
  // Number('123hh') // NaN
  const tmpNum=0;
  // if (num && typeof num !== 'object' && !isNaN(num)) {
  //   return Number(num)
  // }
  if (num && typeof num === 'number') {
    return num;
  }
  return tmpNum;
}

/**
 * @param {}
 * @return {} isArray
 */
function isArrayFn(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * @param {}
 * @return {} get array
 */
 // str may be null undefined '' and so on;
function myArr(arr) {
  const tmpArr=[];
  if (arr && isArrayFn(arr)) {
    return arr;
  }
  return tmpArr;
}

/**
 * @param {}
 * @return {} get object
 */
 // str may be null undefined '' and so on;
function myObj(obj) {
  const tmpObj={};
  const type = Object.prototype.toString.call(obj);
  if (type === "[object Object]") {
    return obj;
  }
  return tmpObj;
}

/**
 * @param {}
 * @return {} 此方法是在lodash get方法的基础上，把原本返回null的地方改成了返回用户输入的initValue的值，可以防止前端页面出现错误
 */
const { get } = require('lodash');
function myGet(obj, path, initValue) {
  if (get(obj, path, initValue) === null) {
    return initValue
  }
  return get(obj, path, initValue);
}

/*
  value: 入参为一个string; 如果入参不是一个string类型,则返回空字符串;
  return: 返回一个去除首尾空格的字符串;
  eg:
  myTrim('     ansdfasd    ')
  返回:
  "ansdfasd"
*/
function myTrim(value) {
  if(Object.prototype.toString.call(value) === '[object String]') {
   return value.replace(/(^\s*)|(\s*$)/g, '');
}
 return '';
}

/*
  params: 入参为一个对象; 如果入参不是对象类型,则直接return params;
  return: 返回对象,递归去除对象内属性值为字符串类型的首尾空格;
  eg:
  const values = {
    a: 123,
    b: '  123 ',
    c: null,
    d: undefined,
    e: [123],
    f: {name: '  4455  ', age: 444},
    g: [],
    h: {},
    k: true,
  }
  返回值
  const values = {
    a: 123
    b: "123"
    c: null
    e: [123]
    f: {name: "4455", age: 444}
    g: []
    h: {}
    k: true
  }
*/
function myObjTrim(params) {
  if(Object.prototype.toString.call(params) === '[object Object]'){
    const tmpObj = {};
    Object.keys(params).forEach((attr) => {
      if(Object.prototype.toString.call(params[attr]) ==='[object String]') {
          tmpObj[attr]=params[attr].replace(/(^\s*)|(\s*$)/g, '');
      } else {
        tmpObj[attr] = formatTrim(params[attr]);
      }
    })
    return tmpObj;
  }
  return params;
}



const common = {
  myStr,
  myNum,
  myArr,
  myObj,
  myGet,
  myTrim,
  myObjTrim
}

module.exports = common;
