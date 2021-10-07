// 现在我们使用异步来解决fs.stat的异步问题

//#region  1. 首先是给异步操作一个回调函数, 在回调函数中将需要返回的参数作为回调函数的参数
// function getData(callback) {
//   setTimeout(() => {
//     let name = "shuosuo";
//     // 直接在异步操作内部进行打印并不能够生效
//     // console.log(name + "nihaoa");
//     callback(name)
//   }, 1000);
// }

// getData(value => console.log(value))
//#endregion


// 2. 来到了我们的重头戏 async/await
// async可以将一个同步函数该变成为一个异步函数
// async function info() {
//   let name = "shuosuo";
//   return name
// }
// ** 使用async返回的数据其实是一个Promise
// ** await关键字一定要使用在异步方法之中
// async function getData() {
//   console.log(await info());
// }

// getData()


// 3. 当然我们的异步并不只是要传递一个字符串, 这里我们传递一个promise试试
//#region 
// async function _info() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let age = 18;
//       resolve(age)
//     }, 1000)
//   })
// }
// async function getData() {
//   console.log(await info());
//   console.log(await _info());
// }

// getData()
//#endregion


// 4. 现在开始最重要的: 使用async/await 来实现之前的需求
const fs = require("fs");
let path = "../7_fs_async_await";
let arr = [];

// ** 由于 fs.stat的异步行为, 所以我们要将其封装起来, 然后在调用的时候使用 await
async function isDir(_path) {
  return new Promise((resolve, reject) => {
    fs.stat(_path, (err, stat) => {
      if (err) {
        console.log(err);
        reject(err);
        return
      };

      if (stat.isDirectory()) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })

}

// ** 注意这里的async关键字
fs.readdir(path, async (err, files) => {
  if (err) {
    console.log(err);
    return
  };

  for (let item of files) {
    if (await isDir(path + "/" + item)) {
      arr.push(item)
    }
  }
  console.log(arr);
})


