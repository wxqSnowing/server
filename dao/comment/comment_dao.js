let { pool } = require("../../conf/mysqlConf.js")
let { queryWorkCommentSQL } = require('./comment_sql.js')

module.exports = {
    queryWorkComment: function(params, callback) { // users表中查询指定user操作
        let { workid } = params;
        let sqlparam = [workid];
        pool.query(queryWorkCommentSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },
}