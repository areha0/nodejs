// 我们的目的是要将所有目录都放入到一个数组中
// 思路: 首先是对需要检测的目录使用 fs.stat -- 判断是否存在, 然后再使用 fs.readdir, 读取该目录结构
// 然后循环遍历该目录中的所有路径, 将目录防止在数组中

// ** 但是需要注意的是: 由于fs的方法都是异步的, 所以使用for循环监测是否为目录时, 不会达到预期目标
// ** fs的方法是异步的, 所以当for循环已经循环一遍时, 但是fs.stat()方法还没完成, 所以返回一个空的数组

const fs = require("fs");

let path = "../6_fs_async";
let res = [];

//#region  使用普通的for循环

// fs.stat(path, (err, stat) => {
//   if (err) {
//     console.log(err);
//     return
//   };
//   fs.readdir(path, (err, files) => {
//     if (err) {
//       console.log(err);
//       return;
//     };
//     // console.log(files);
//     // *** 1. 使用for循环对目录下的结构进行判断是否为目录
//     for (let item of files) {
//       fs.stat(`${path}/${item}`, (err, data) => {
//         if (data.isDirectory()) {
//           res.push(item)
//         }
//       })
//     }
//   })
// })
// setTimeout(() => {
//   console.log(res);
// }, 100);

//#endregion

//#region  检验for循环对异步事件的处理
// for (let i = 0; i < 2; i++) {
//   setTimeout(() => {
//     res.push(i);
//   }, 100)
// }
// console.log(res);
// setTimeout(() => {
//   console.log(res);
// }, 200)

//#endregion

// 解决方法: 1. 使用递归来代替循环, 但是注意, 仍然是拿到的数组为空, 需要实现一个延时
// 好像是给延时之后, 最开始的for循环也可是实现, 我蒙蔽了
// 递归解决不了问题了

//#region 
// fs.readdir(path, (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   };
//   // 使用递归进行循环
//   (function judge(i) {
//     if (i == files.length) {
//       setTimeout(() => {
//         console.log(res);
//       }, 100);
//       return
//     }
//     let enpath = path + "/" + files[i];
//     fs.stat(enpath, (err, data) => {
//       if (data.isDirectory()) {
//         // console.log(enpath, files[i]);
//         res.push(files[i]);
//         // console.log(res);
//       }
//     });
//     judge(i + 1);
//   })(0);
// })
//#endregion
