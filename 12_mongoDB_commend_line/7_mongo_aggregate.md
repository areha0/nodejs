### mongoDB的高级查询 aggregate -- 聚合管道
1. aggregate可以实现表关联查询, 数据的统计
2. $project -- 选取数据列, 类似于 find({}, {"name":1})
3. $match -- 筛选数据, 类似于 find({"name": "shuosuo"})
4. $limit -- 限制数据的数量, 类似于 find().limit(1)
5. $skip -- 跳过指定数量的数据, 类似于 find().skip(1)
6. $sort -- 进行排序, 类似find().sort({name:1})
7. $group -- 条件组合的结果, 用于统计
8. **$lookup** -- 用于和其他表实现关联查询
9. $sum -- 用于计算总和

### aggregate的使用方式
1. aggregate方法中传入一个数组作为参数, 数组中可以包含多个对象, 将操作符作为键, 命令行作为对应的值
db.集合名字.aggregate([{

}])
例子:
db.order.aggregate([
   {
     $project:{order_id:1, all_price:1}
   },
   {
     $match:{"all_price":{$gte: 90}}
   },
   {
     $sort:{all_price:1}
   },
   {
     $skip: 1
   },
   {
     $limit: 1
   }
])
<!--  -->
db.order_item.aggregate([
  {
    $group: {_id:"$order_id", totle:{$sum:"$num"}}
  }
])
<!--  -->
db.order.aggregate([
  {
    $lookup:{
      from: "order_item",
      localField:"order_id",
      foreignField: "order_id",
      as:"items"
    }
  }
])