let { pool } = require("../../conf/mysqlConf.js")
let { queryWorkCommentSQL, addWorkCommentSQL } = require('./comment_sql.js')

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

    addComment: function(params, callback) { // work表中查询操作
        let sqlparam = [
            params.workid ? params.workid : 0,
            params.uid ? params.uid : 0,
            params.comment ? params.comment : "",
        ];
        pool.query(addWorkCommentSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },
}