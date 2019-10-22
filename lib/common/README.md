## myStr myNum

**myStr** returns the **过滤掉null undefined object boolean 最终返回字符串** .
* 如果入参是null undefined object boolean 则返回 空字符串
* 如果入参为字符串则不做处理，直接返回
* myStr的作用就确保返回值永远是一个字符串

**myNum** returns the **过滤掉null undefined object boolean 最终返回number** .

<!--  -->

## Install

```bash
$ npm install zdw-utils
$ import { myStr, myNum } from 'zdw-utils'
```

## Usage

```js

const { myStr } = require('zdw-utils')

myStr(null)
// => ''
myStr(undefined)
// => ''
myStr({name: 'xiaoli'})
// => ''
myStr([1, 2, 3])
// => ''
myStr('你好')
// => '你好'
myNum(123)
// => 123
```