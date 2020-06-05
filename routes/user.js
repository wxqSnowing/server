var express = require('express');
var router = express.Router();

let { queryUser, addUser, updateUserPwd, updateUserBasicInfo } = require("../dao/users/users_dao.js"); // 数据库操作

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

// 获取指定用户信息 get请求
router.put('/api/update_user', function(req, res, next) {
    let urlParam = {
        pwd: req.query.pwd,
        uid: req.query.uid
    };
    updateUserPwd(urlParam, function(success) {
        console.log(success)
        if (typeof(success) != 'undefined') {
            let responsedata = {
                status: 200,
                message: "修改密码成功",
                success: true,
                data: success
            }
            res.json(responsedata);
        }
    })
});


// 获取指定用户信息 get请求
router.put('/api/update_user_basic_info', function(req, res, next) {
    let urlParam = {
        username: req.query.username,
        age: req.query.age,
        major: req.query.major,
        avatar: req.query.avatar,
        constellatory: req.query.constellatory,
        hobby: req.query.hobby,
        autograph: req.query.autograph,
        address: req.query.address,
        email: req.query.email,
        mobile: req.query.mobile,
        tags: req.query.tags,
        gender: req.query.gender,
        level: req.query.level,
        activity: req.query.activity,
        usercircle: req.query.usercircle,
        uid: req.query.uid,
    };
    updateUserBasicInfo(urlParam, function(success) {
        console.log(success)
        if (typeof(success) != 'undefined') {
            let responsedata = {
                status: 200,
                message: "修改基本信息成功",
                success: true,
                data: success
            }
            res.json(responsedata);
        }
    })
});

module.exports = router;