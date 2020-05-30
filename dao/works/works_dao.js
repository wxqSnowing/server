let { pool } = require("../../conf/mysqlConf.js")
let { queryWorkSQL } = require('./work_sql.js')

module.exports = {
    queryWork: function(params, callback) { // sider_image_config表中查询操作
        let { type } = params;
        let sqlparam = [type];
        pool.query(queryWorkSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },
}