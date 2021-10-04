// commenJS中使用require进行导入
// 1. exports导出一个对象
// let methods = require("./2_exports");
// 此时的methods是: { methods: { sayHello: [Function: sayHello], sayFuck: [Function: sayFuck] }  }
// console.log(methods.methods.sayHello());

// 2. module.exports
// let methods = require("./2_exports");
// console.log(methods);
// 此时的methods是: { sayHello: [Function: sayHello], sayFuck: [Function: sayFuck] }
// console.log(methods.sayHello());

// 3. exports导出多个同级对象
// let methods = require("./2_exports");
// console.log(methods);
// 此时的methods是: { sayHello: [Function (anonymous)], sayFuck: [Function (anonymous)] }
// console.log(methods.sayFuck());

// 4. 将导出的文件放在 node_modules 文件夹中, 可以直接引入文件夹来进行快速导入
// ** 注意: 文件夹入口函数为 index.js
// let methods = require("methods")
// console.log(methods);

// 5. 如果文件夹中的入口文件并不是 index.js 如果需要快速引入, 需要添加package.json声明入口文件
// ** 对入口文件使用命令 npm init --yes
let methods = require("tools");
console.log(methods);