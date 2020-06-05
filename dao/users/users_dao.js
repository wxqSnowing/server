let { pool } = require("../../conf/mysqlConf.js")
let { queryUserSQL, addUserSQL } = require('./users_sql.js')

module.exports = {
    queryUser: function(params, callback) { // users表中查询指定user操作
        let { uid } = params;
        let sqlparam = [uid];
        pool.query(queryUserSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result[0]);
        });
    },

    addUser: function(params, callback) { // users表中查询指定user操作
        let sqlparam = [
            params.username ? params.username : "",
            params.pwd ? params.pwd : "",
        ];
        pool.query(addUserSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },
}