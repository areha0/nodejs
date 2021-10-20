// 将数据库数据动态地显示在页面时, 并且同时获取页面表单中的数据

const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
const { MongoClient } = require("mongodb");
const querystring = require("querystring")
let app = require("./express");


// 创建http请求
http.createServer(app).listen(8081);

const url = "mongodb://127.0.0.1:27017";
const dbname = "itying";
// *** 现在介绍一种另外的数据库连接方法, 之前是先实例化MongoCLient --- 这样的操作是有缺点的, 每次刷新时, 因为数据库
// 已经关闭, 所以页面会一直更新


// 在get请求中将数据库中的数据通过ejs文件显示在页面中
// 1. 连接数据库, 获取数据库中的数据, 将数据动态显示在ejs文件中
app.get("/", (request, response) => {
  // response.send(200, "则是首页")

  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.log(err);
      return
    };
    console.log("数据库连接成功");
    let db = client.db(dbname);

    db.collection("user").find().toArray((err, data) => {
      if (err) {
        console.log(err);
        return
      };
      // console.log(data);
      ejs.renderFile("./pages/home.ejs", { list: data }, (err, result) => {
        if (err) {
          console.log(err);
          return
        };
        response.send(200, result)
      })

      // ***** //
      client.close();
    })

    // ** 尤其要注意的是数据库关闭的时机, 由于数据的操作是一个异步操作, 所以要等数据库操作完成后再进行关闭
    // client.close();
    // response.send(200, "介是首页")

  })
});

app.get("/registor", (request, response) => {
  fs.readFile("./pages/login.html", (err, data) => {
    if (err) {
      console.log(err);
      return
    };
    response.send(200, data)
  })
});

// 2. 获取页面表单中的数据, 将数据存放入数据库中
app.post("/doRegistor", (request, response) => {

  // 将获取到的post数据转化为对象, 不需要转化为json格式
  let alldata = new URLSearchParams(request.body).entries();
  let data = {}
  for (let pair of alldata) {
    data[pair[0]] = pair[1]
  }
  console.log(data);

  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.log(err);
      return
    };
    let db = client.db(dbname);
    db.collection("user").insertOne(data, (err, result) => {
      if (err) {
        console.log(err);
        return
      };
      console.log("插入数据成功");
      client.close();
      response.send(200, "注册成功")
    })
  })
})

// 注册静态web服务目录
app.static("static")
console.log('Server running at http://127.0.0.1:8081/');