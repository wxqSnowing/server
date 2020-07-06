let { pool } = require("../../conf/mysqlConf.js")
let { queryUserSQL, addUserSQL, updateUserPwdSQL, updateUserBasicInfoSQL, loginUserCheckSQL } = require('./users_sql.js')

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
            params.email ? params.email : "",
            params.mobile ? params.mobile : "",
        ];
        pool.query(addUserSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    loginUserCheck: function(params, callback) { // users表中查询指定user操作
        let sqlparam = [
            params.username ? params.username : "",
            params.pwd ? params.pwd : "",
        ];
        pool.query(loginUserCheckSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    updateUserPwd: function(params, callback) { // users表中查询指定user操作
        let sqlparam = [
            params.pwd ? params.pwd : "",
            params.uid ? params.uid : 0,
        ];
        pool.query(updateUserPwdSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },

    updateUserBasicInfo: function(params, callback) { // users表中查询指定user操作
        let sqlparam = [
            params.username ? params.username : '',
            params.hobby ? params.hobby : '',
            params.major ? params.major : '',
            params.constellatory ? params.constellatory : '',
            params.email ? params.email : '',
            params.mobile ? params.mobile : '',
            params.address ? params.address : '',
            params.autograph ? params.autograph : '',
            params.uid ? params.uid : 0,
        ];
        pool.query(updateUserBasicInfoSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },
}