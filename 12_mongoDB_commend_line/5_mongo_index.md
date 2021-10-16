### mongoDB中的索引设置命令行
1. mongo设置索引的目的是: 查找数据能加地快捷方便, 但是会相应的增加插入数据的时间
2. db.集合名字.ensureIndex({"username":1}) -- 表示该表中的数据按照username升序进行索引
3. db.集合名字.getIndexes() -- 获取当前集合的索引名字
4. db.集合名字.dropIndex({"username":1}) -- 表示删除特定的索引值
5. db.集合名字.find().explain("executionStats") -- 表示当前查询元素所需的具体时间

#### 复合索引
1. 可以同时对表添加多个索引条件
2. db.集合名字.ensureIndex({"username":1, "age":-1}) -- 当同时查询username和age是会用到这个索引, 或者是查询username是也会用到这个索引, 但是查询age是并不会用到这个索引

#### 唯一索引
1. db.集合名字.ensureIndex({"username":1}, {"unique":true}) -- 表示唯一索引, 其中要求username中的值不能相同