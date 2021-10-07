1. npm init / npm init --yes 生成package.json文件
2. npm install 生成node_modules文件
3. npm list 显示安装的包
4. 指定版本号: 在包名字后面 添加 @2.2.1(版本号)
5. 在安装命令后添加 --save 是为了将安装的包名添加到package.json中
6. 关于package.json中的版本号   ^ -- 表示第一位版本号不变, 后两位在安装时安装最新版本(因为使用 npm install时会重新安装包); ~ -- 表示前两位版本表示不变, 最后一位保持最新; * -- 表示三个版本都保持最新;  如果不希望改变版本, 那就去掉前面的符号