<div align="center">
  <img alt="hammer logo" width="200" src="https://static-images-1305792369.cos.ap-shanghai.myqcloud.com/user-home.svg"/>
</div>

<div align="center">
  <h1>@fujia/user-home</h1>
</div>

<div align="center">

Obtain the user home directory and fallback to the system temp directory if don't exist.

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>


## Installation

```bash
npm i @fujia/user-home

# or use yarn
yarn add @fujia/user-home
```

## Usage

You can import the generated bundle to use the whole library generated by this starter:

```javascript
import userHome from '@fujia/user-home'

console.log(userHome()); // => '/Users/sunny'

// And if there is no home directory:
console.log(userHome()); // => undefined, and log info: 'Doesn\'t exist home directory for current login user.'

// also, you can get the temp directory by pass true param
console.log(userHome(true)); // => something look like(mac): /var/folders/70/x0nk_t0s2m93xbzq4x7px0t40000gn/T 

```


