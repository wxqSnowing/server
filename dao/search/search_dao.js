let { pool } = require("../../conf/mysqlConf.js")
let { queryKeySQL } = require('./search_sql.js')

module.exports = {
    query: function(params, callback) { // key_info表中查询指定key操作
        let { queryKey } = params;
        let sqlparam = [queryKey];
        console.log(queryKeySQL);
        pool.query(queryKeySQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            else {
                console.log(result, '=========');
                callback(result);
            }

        });
    },
}