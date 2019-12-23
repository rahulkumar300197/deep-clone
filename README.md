# clone-deep-js

[![npm version](https://img.shields.io/npm/v/obclone.svg?style=flat-square)](https://www.npmjs.com/package/clone-deep-js)
[![npm license](https://img.shields.io/static/v1.svg?label=License&message=MIT&color=informational)](https://github.com/rahulkumar300197/deep-clone/blob/master/LICENSE)
[![npm repository](https://img.shields.io/static/v1.svg?label=Repository&message=GitHub&color=yellow)](https://github.com/rahulkumar300197/deep-clone)
[![npm author](https://img.shields.io/static/v1.svg?label=Author&message=rahulkumar310197&color=success)](https://www.npmjs.com/~rahulkumar310197)

>**clone-deep-js:** Js objects or variables copy API, its useful to create **deep copy** of objects. (Helpful for arrays and objects)
## Features
- DeepClone

## Support
>All node versions

## Installing
[![NPM](https://nodei.co/npm/clone-deep-js.png?mini=true)](https://nodei.co/npm/clone-deep-js/)

**Using npm:**
```bash
$ npm install clone-deep-js
```

**Using bower:**

```bash
$ bower install clone-deep-js
```

**Using yarn:**

```bash
$ yarn add clone-deep-js
```

## Examples

```js
>>const deepClone = require("clone-deep-js");
```
```js
//Deep Clone--------------------------
>>var a = {"o1" : 10};
>>var b = deepClone(a);
>>a["o2"] = 20;

>>console.log(a)
>>{"o1" : 10, "o2" : 20}

>>console.log(b)
>>{"o1" : 10}
```


Similarly in arrays and inherated objects...

## licence
MIT [licence](https://opensource.org/licenses/MIT)

## Author
@rahulkumar310197
