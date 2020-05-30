let { pool } = require("../../conf/mysqlConf.js")
let { siderImageSQL } = require('./sider_sql.js')

module.exports = {
    query: function(callback) { // sider_image_config表中查询操作
        pool.query(siderImageSQL, function(error, result) {
            if (error)
                throw error;
            else {
                callback(result);
            }

        });
    },
}