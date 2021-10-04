// 用于演示commenJS中文件的导出

let methods = {
  sayHello() {
    return "hello stranger!"
  },
  sayFuck() {
    return "fuck you"
  }
}
// 1. 使用exports进行导出一个对象(不太建议), 将导出的 方法或数据 作为exports的属性; 适合同时导出多个同级的对象
// exports.methods = methods


// 2. 使用module.exports进行导出, 适合导出一个对象
// module.exports = methods

// 3. 使用exports导出多个同级对象; 结果和第2中国方法相同
exports.sayHello = function () {
  return "hello stanger!"
};
exports.sayFuck = function () {
  return "fuck you!"
}
