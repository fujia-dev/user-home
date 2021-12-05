<div align="center">
  <img alt="hammer logo" width="200" src="https://static-images-1305792369.cos.ap-shanghai.myqcloud.com/user-home.svg"/>
</div>

<div align="center">
  <h1>@fujia/user-home</h1>
</div>

<div align="center">

获取用户的目录，如果用户不存在的，可以回退到一个临时的目录

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>


## 安装

```bash
npm i @fujia/user-home

# or use yarn
yarn add @fujia/user-home
```

## 使用

直接引用这个npm包，示例如下：

```javascript
import userHome from '@fujia/user-home'

console.log(userHome()); // => '/Users/sunny'

// And if there is no home directory:
console.log(userHome()); // => undefined, and log info: 'Doesn\'t exist home directory for current login user.'

// also, you can get the temp directory by pass true param
console.log(userHome(true)); // => something look like(mac): /var/folders/70/x0nk_t0s2m93xbzq4x7px0t40000gn/T 

```
