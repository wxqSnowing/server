let { pool } = require("../../conf/mysqlConf.js")
let { queryWorkSQL, insertWorkSQL, rankWorkSQL, recommendWorkSQL, mineWorkSQL, queryWorkByWorkIdSQL, delteWorkByWorkIdSQL } = require('./work_sql.js')

module.exports = {
    queryWork: function(params, callback) { // 查询 createtime
        let { type } = params;
        let sqlparam = [type];
        pool.query(queryWorkSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    queryWorkByWorkId: function(params, callback) { // 查询 by workid
        let { workid } = params;
        let sqlparam = [workid];
        pool.query(queryWorkByWorkIdSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    delteWorkByWorkId: function(params, callback) { // 查询 by workid
        let { workid } = params;
        let sqlparam = [workid];
        pool.query(delteWorkByWorkIdSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },


    queryRankWork: function(params, callback) { // 排行查询hotscore
        let { type } = params;
        let sqlparam = [type];
        pool.query(rankWorkSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    queryRecommendWork: function(params, callback) { // 排行查询hotscore
        let { type } = params;
        let sqlparam = [type];
        pool.query(recommendWorkSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    queryMineWork: function(params, callback) { // 排行查询hotscore
        let { uid } = params;
        let sqlparam = [uid];
        pool.query(mineWorkSQL, sqlparam, function(error, result) {
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
            work.description ? work.description : ""
        ];
        pool.query(insertWorkSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },
}