let mysql = require("mysql") // 导入mysql模块

let mysql_config = { // mysql采用pool连接池基础配置 （采用pool连接池与不采用配置略有不同，具体请查看文档）
    connectionLimit: 10, // 最大连接数
    host: '127.0.0.1', // 本地搭建则本机ip,远程服务器则远程服务器ip 
    user: 'root', // mysql 账户
    password: 'MhxzKhl666', // mysql 密码
    database: 'myblog' // 要操作的数据库
}
let pool = mysql.createPool(mysql_config); // 创建连接池

module.exports = {
    pool
}