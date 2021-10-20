### mongoDB数据库的备份(dump)与还原(restore)
1. 备份
使用命令行: mongodump -h dbhost -d dbname -o dbdirectory
其中, dbhost是指数据库所在主机地址(127.0.0.1), dbname是指所要导出数据库的名字, dbdirectory是指所要导出的目录

2. 还原
使用命令行: mongorestore -h dbhost -d dbname dbdirectory
**注意:** 这里的dbhost是指数据库所在地址; dbname: 需要恢复的数据库实例,可以随意起名字

3. mongo数据库需要账户密码时
mongodump -h localhost:27017 -d dbname -u user -p pwd -o dbdirectory
mongorestore -h localhost:227017 -d dbname -c order --dir d:\.... -u user-p pwd 
  

#### 使用方法
1. 备份时要先打开cmd使用mongo连接上数据库(不需要使用特定集合), 然后再从新打开一个cmd窗口输入命令
mongodump -h 127.0.0.1 -d aggtest -o H:\mondodata
2. 还原的时候也是需要重新打开一个cmd命令窗口
mongorestore -h 127.0.0.1 -d areha(可以改为任意的名字) H:\mongodata