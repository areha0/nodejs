### mongoDB中的管理员设置
1. 设置超级管理员在admin表中设置
use admin 
db.createUser({ user:'shuosuo', pwd:'123456', roles:[{role:'root',db:'admin'}] })
2. 配置mongoDB数据库文件
C:\Program Files\MongoDB\Server\4.0\bin\mongod.cfg
security: authorization: enabled  **这里的格式尤其重要**
3. 重启mongoDB服务器: 输入指令: services.msc
4. 使用超级管理员账户连接服务器: mongo admin -u 用户名 -p 密码
   
#### 给其他集合设置一个管理员(非超级管理员)
1. 设置某表的管理员
 use eggcms 
 db.createUser( { user: "areha", pwd: "123456", roles: [ { role: "dbOwner", db: "itying" } ] } )

#### 设置管理员的常用命令
1. show users -- 展示所有的管理员
2. db.dropUser("name") -- 删除管理员
3. db.update("name", {pwd: "passward"}) -- 更新密码
4. db.auth("admin", "passward") -- 用户认证
5. 超级管理员角色 : root
6. 数据库管理角色: dbOWner

#### 连接数据库时要验证管理员密码
const url = "mongodb://admin:123456@localhost:27017/"