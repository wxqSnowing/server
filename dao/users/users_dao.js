let { pool } = require("../../conf/mysqlConf.js")
let { queryUser } = require('./users_sql.js')

module.exports = {
    query: function(params, callback) { // users表中查询指定user操作
        let { uid } = params;
        let sqlparam = [uid];
        pool.query(queryUser, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result[0]);
        });
    },
}