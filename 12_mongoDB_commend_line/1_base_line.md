### MongoDB中的命令行
**数据库(dbname) - 集合(表)(setname) - 数据(行)**
1. mongo -- 建立连接
2. show dbs -- 展示所有数据库
3. use + dbname -- 选中某一数据库, 如果没有则创建(还需要添加一条数据)
4. db.setname.insert({"name":"shuosuo","age":20})  -- 为集合插入一条数据
5. show collections -- 展示数据库中所有集合
6. db.dropDatabase() -- 删除数据库, 使用方法: 先use要删除的数据库, 再执行命令
7. db.setname.drop() -- 删除集合
8. db.setname.find() -- 查询集合中所有数据