var express = require('express');
var router = express.Router();

let { queryUser, addUser } = require("../dao/users/users_dao.js"); // 数据库操作

// 获取指定用户信息 get请求
router.get('/api/queryUser', function(req, res, next) {
    let urlParam = {
        uid: req.query.uid
    };
    queryUser(urlParam, function(success) {
        let value = JSON.parse(JSON.stringify(success));
        let responsedata = {
            status: 200,
            message: "数据获取成功",
            success: true,
            data: value
        }
        res.json(responsedata);
    })
});

// 获取指定用户信息 get请求
router.post('/api/add_user', function(req, res, next) {
    let urlParam = {
        username: req.query.username,
        pwd: req.query.pwd
    };
    addUser(urlParam, function(success) {
        console.log(success)
        if (typeof(success) != 'undefined') {
            let responsedata = {
                status: 200,
                message: "增加用户成功",
                success: true,
                data: success
            }
            res.json(responsedata);
        }
    })
});

module.exports = router;