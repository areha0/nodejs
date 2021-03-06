### 查找数据
1. db.集合名字.find()  -- 显示表中的所有数据
2. db.集合名字.find({"age":22}) -- 查找age为22的数据

**注意: 其中find()方法中的条件可以有多种表示**
1. find({"age":22}) -- 查找特定的值
2. find({"age": {$gt: 22}}) -- {$gt: 22}, 表示大于
3. find({"age": {$lt: 22}}) -- {$lt: 22}, 表示小于
4. find({"age": {$gte: 22}}) -- {$gte: 22}, 表示大于等于
5. find({"age": {$lte: 22}}) -- {$lte: 22}, 表示小于等于
6. find({"age": {$gte: 22, $lte: 35}}) -- {$gte: 22, $lte: 35}, 表示多个条件限制
7. find({"name": /shuo/}) -- 模糊搜索, 表示搜索名字中含有shuo的
8. find({"name": /^shuo/}) -- 表示搜索名字开头是shuo的, 类似于正则表达式
9. find({}, {name:1}) -- 表示只显示name列数据
10. find({age: {$gt: 15}}, {age:1}) -- 同时可以添加筛选条件
11. find().sort({age:1}) -- 表示升序排列
12. find().sort({age:-1}) -- 表示降序排列
13. find().limit(5) -- 表示只显示前五条数据
14. find().skip(5) -- 表示跳过前五条数据
15. find().skip((page-1)*count).limit(count) -- 可以用于分页
16. find({$or: [{"age":22}, {"age":25}]}) -- $or 表示或
17. findOne() -- 表示查找第一条数据, 可以使用limit(1)来代替
18. find().count() -- 表示查找到的数据的个数