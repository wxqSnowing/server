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
            params.age ? params.age : 0,
            params.major ? params.major : '',
            params.avatar ? params.avatar : '',
            params.constellatory ? params.constellatory : '',
            params.hobby ? params.hobby : '',
            params.autograph ? params.autograph : '',
            params.address ? params.address : '',
            params.email ? params.email : '',
            params.mobile ? params.mobile : '',
            params.tags ? params.tags : '',
            params.gender ? rparams.gender : 'female',
            params.level ? params.level : '',
            params.activity ? params.activity : '',
            params.usercircle ? params.usercircle : '',
            params.uid ? params.uid : 0,
        ];
        pool.query(updateUserBasicInfoSQL, sqlparam, function(error, result) {
            if (error)
                throw error;
            callback(result);
        });
    },
}