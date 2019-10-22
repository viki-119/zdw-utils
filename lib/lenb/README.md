## lenb

**lenb** returns the **number of bytes used to represent the characters** in a text string.

Different: `string.prototype.length` returns the **number of characters** in a text string.

**lenb** is the javascript version for [lenb in Microsoft Excel](https://support.office.com/en-ie/article/len-lenb-functions-29236f94-cedc-429d-affd-b5e33d2c67cb).

<!--  -->

## Install

```bash
$ npm install zdw-utils
$ import { lenb } from 'zdw-utils'
```

## Usage

```js

const { lenb } = require('zdw-utils')

lenb('hello')
// => 5
lenb('good')
// => 4
lenb('你好')
// => 4
lenb('ㄴ而ㄷㅋ比ㄱ')
// => 12
```

**NOTE:** These functions may not be available in all languages.

**NOTE:** lenb counts 2 bytes per character only when a DBCS language is set as the default language. Otherwise lenb behaves the same as `string.prototype.length`, counting 1 byte per character.

The languages that support DBCS include Japanese, Chinese (Simplified), Chinese (Traditional), and Korean.

<!-- [travis-image]: https://travis-ci.org/stevemao/left-pad.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/left-pad -->