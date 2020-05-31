let { pool } = require("../../conf/mysqlConf.js")
let { queryWorkSQL, insertWorkSQL } = require('./work_sql.js')

module.exports = {
    queryWork: function(params, callback) { // 查询
        let { type } = params;
        let sqlparam = [type];
        pool.query(queryWorkSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    insertWork: function(work, callback) { // work表中查询操作
        //uid, title, type, subtype, tags, content, image
        let sqlparam = [
            work.uid ? work.uid : 0,
            work.title ? work.title : "",
            work.type ? work.type : "",
            work.subtype ? work.subtype : "",
            work.tags ? work.tags : "",
            work.content ? work.content : "",
            work.image ? work.image : "",
        ];
        pool.query(insertWorkSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },
}