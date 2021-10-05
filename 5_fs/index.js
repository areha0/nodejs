// 首先需要确认的是, 本文件中的所有方法都是异步的, 当然fs库中也有同步的方法

/*
  1. fs.stat(path, callback(err, states)): 判断是否存在文件/目录, 可以搭配 isFile()/isDirectory()使用;
  2. fs.mkdir(path, callback(err)): 创建文件夹
  3. fs.writeFile(path, content, callback(err)): 创建/写入文件
  4. fs.appendFile(path, content, callback(err)): 创建/续写文件
  5. fs.readFile(path, callback(err, content)): 读取文件内容
  6. fs.readDir(path, callback(err, files)): 读取某文件夹的文件
  7. fs.rename(path, repath, callback(err)): 重命名/修改路径
  8. fs.rmdir(path, callback(err)): 删除目录
  9. fs.unlink(path, callback(err)): 删除文件
*/


const fs = require("fs");

//#region 1. fs.stat
/*
  fs.stat("./test", (err, stats) => {
    if (err) {
      console.log(err);
      return
    }
    if (stats.isFile()) {
      console.log("是一个文件");
    } else if (stats.isDirectory()) {
      console.log("是一个目录");
    }
  })
*/
//#endregion

//#region 2. fs.mkdir
/*
  fs.mkdir("./css", (err) => {
    if (err) {
      console.log(err);
      return
    };
    console.log("创建目录成功");
  })
*/
//#endregion

//#region 3. fs.writeFile
/*
  fs.writeFile("./home.html", "nihaoa, 我的html\n,大傻逼", (err) => {
    if (err) {
      console.log(err);
      return
    }
    console.log("创建/写入文件成功");
  })
*/
//#endregion

//#region 4. fs.appendFile
/*
  fs.appendFile("./home.html", "woyoulail, \n我只是续写的大哥", (err) => {
    if (err) {
      console.log(err);
      return
    }
    console.log("创建/写入文件成功");
  })
*/
//#endregion

//#region 5. fs.readFile
/*
  fs.readFile("./home.html", (err, content) => {
    if (err) {
      console.log(err);
      return
    };
    // 输出的内容编码为buffer类型, 所以需要进行转码 toString()
    console.log(content);
    console.log(content.toString());
  })
*/
//#endregion

//#region 6. fs.readdir
/*
  fs.readdir("../5_fs", (err, files) => {
    if (err) {
      console.log(err);
      return
    };
    console.log(files);
  })
*/
//#endregion

//#region 7. fs.rename
/*
  fs.rename("./home.html", "./html/index.html", (err) => {
    if (err) {
      console.log(err);
      return
    };
    console.log("修改成功");
  })
*/
//#endregion

//#region 8. fs.rmdir
/*
  fs.rmdir("./test/", (err) => {
    if (err) {
      console.log(err);
      return
    }
    console.log("删除目录成功");
  })
*/
//#endregion

fs.unlink("./test.js", err => {
  if (err) {
    console.log(err);
    return
  };
  console.log("删除文件成功");
})
