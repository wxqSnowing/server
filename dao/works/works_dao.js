let { pool } = require("../../conf/mysqlConf.js")
let { queryWorkSQL, insertWorkSQL, rankWorkSQL, recommendWorkSQL, mineWorkSQL, queryWorkByWorkIdSQL, delteWorkByWorkIdSQL, updateWorkByWorkIdSQL, updateWorkViewNumsSQL } = require('./work_sql.js')

module.exports = {
    queryWork: function(params, callback) { // 查询 createtime
        let { type, querycount } = params;
        let sqlparam = [type, querycount];
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
            else {
                pool.query(updateWorkViewNumsSQL, sqlparam, function(error, result) {

                })
            }
            callback(result);
        });
    },

    delteWorkByWorkId: function(params, callback) { // 查询 by workid
        let { workid, querycount } = params;
        let sqlparam = [workid, querycount];
        pool.query(delteWorkByWorkIdSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },


    queryRankWork: function(params, callback) { // 排行查询hotscore
        let { type, querycount } = params;
        let sqlparam = [type, querycount];
        pool.query(rankWorkSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    queryRecommendWork: function(params, callback) { // 排行查询hotscore
        let { type, querycount } = params;
        let sqlparam = [type, querycount];
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

    updateWork: function(work, callback) { // work表中修改操作
        let sqlparam = [
            work.title ? work.title : "",
            work.type ? work.type : "",
            work.subtype ? work.subtype : "",
            work.tags ? work.tags : "",
            work.content ? work.content : "",
            work.image ? work.image : "",
            work.description ? work.description : "",
            work.workid ? work.workid : "",
        ];
        pool.query(updateWorkByWorkIdSQL, sqlparam, function(error, result) {
            if (error) {
                console.log('throw', error);
                throw error;
            }
            callback(result);
        });
    },
}