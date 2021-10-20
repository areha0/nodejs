// 1. mongoDB库的安装与引入 npm install mongoDB --save
const MongoClient = require("mongodb").MongoClient;
// 2. 获取数据库地址, 可以在cmd中输入mongo进行获取
const url = "mongodb://127.0.0.1:27017";
// 3. 定义要操作的数据库
const dbname = "itying";
// 4. 实例化MongoingClient, 传入数据库地址
const client = new MongoClient(url);
// 5. 连接数据库
// ** 注意: 整个connect()方法是一个异步操作, 所以关闭数据库一定要在该方法内部完成
client.connect((err) => {
  if (err) {
    console.log(err);
    return
  };
  console.log("数据库连接成功");
  // 6. 数据库连接成功之后就可以进行相应的 增删查改 操作
  // 7. 指定要操作的数据库
  const db = client.db(dbname);

  // 8. 查找数据, collection()方法用于指定需要操作的集合
  // ** toArray()也是一个异步操作, 所以关闭数据库应该在toArray内部完成
  // db.collection("user").find({ "name": "shuosuo" }).toArray((err, data) => {
  //   if (err) {
  //     console.log(err);
  //     return
  //   };
  //   console.log(data);

  //   // *** 操作完毕之后一定要关闭数据库
  //   client.close()
  // })

  // 9. 增加数据
  // db.collection("user").insertOne({ "name": "xiaoyaozi", "age": 101 }, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return
  //   };
  //   console.log("插入成功");
  //   console.log(result);

  //   // *** 操作完毕之后一定要关闭数据库
  //   client.close()
  // })

  // 10. 更新数据
  // db.collection("user").updateOne({ "name": "xiaoyaozi" }, { $set: { "sex": "male" } }, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return
  //   };

  //   console.log("更新成功");
  //   console.log(result);

  //   // *** 操作完毕之后一定要关闭数据库
  //   client.close()
  // })

  // 11. 删除数据
  db.collection("user").deleteOne({ "name": "wangchao" }, (err, result) => {
    if (err) {
      console.log(err);
      return
    };
    console.log("删除成功");
    console.log(result);

    // *** 操作完毕之后一定要关闭数据库
    client.close()
  })



  // // *** 操作完毕之后一定要关闭数据库
  // client.close()
})


