# بسم الله الرحمن الرحيم
## agere

[![NPM version][npm-version-img]][npm-url]
[![NPM downloads][npm-downloads-img]][npm-downloads-url]
[![NPM package size][npm-size-img]][npm-code]




### Install package
        npm install agere

### CDN
        <script src="https://unpkg.com/agere@latest/index.js"></script>
---
### Randomize array elements
```javascript
import {randArr} from "agere";

var myArr = ["Product 1","Product 2","Product 3"];
var newArr = randArr(myArr);

/* 
newArr = 
        ["Product 1","Product 2","Product 3"] ||
        ["Product 1","Product 3","Product 2"] ||
        ["Product 2","Product 1","Product 3"] ||
        ["Product 2","Product 3","Product 1"] ||
        ["Product 3","Product 2","Product 1"] ||
        ["Product 3","Product 1","Product 2"]
*/

randArr(); // [1,2,3,4,5,6,7,8,9,10] || [4,1,3,2,5,9,6,8,10,7] || 3628798 others   (10!)
```


[npm-downloads-img]: https://img.shields.io/npm/dt/agere?logo=npm
[npm-version-img]: https://img.shields.io/npm/v/agere?color=red
[npm-size-img]: https://img.shields.io/bundlephobia/min/agere
[npm-url]: https://www.npmjs.com/package/agere?activeTab=readme
[npm-code]: https://www.npmjs.com/package/agere?activeTab=code
[npm-downloads-url]: https://npmcharts.com/compare/agere?minimal=true