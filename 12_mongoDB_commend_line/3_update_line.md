### mongoDB用于更新数据的命令行
1. db.集合名字.update({"name":"shuosuo"}, {$set: {"age": 18}}) 
2. update({匹配条件}, {$set: {修改结果}}, {multi: true}))  -- 第三项为可选项, update默认只会修改第一项数据, 设置multi:true后会修改多条数据

3. **注意: $set省去后, 就意味着第二项数据完全覆盖原数据**