var express = require('express');
var router = express.Router();

let { queryUser, addUser, loginUserCheck, updateUserPwd, updateUserBasicInfo } = require("../dao/users/users_dao.js"); // 数据库操作

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

// check
router.get('/api/login', function(req, res, next) {
    let urlParam = {
        username: req.query.username,
        pwd: req.query.pwd
    };
    loginUserCheck(urlParam, function(success) {
        let value = JSON.parse(JSON.stringify(success));
        if (value.length == 0) {
            let responsedata = {
                status: 200,
                message: "用户密码不正确",
                success: false,
                data: value
            }
            res.json(responsedata);
        } else {
            let responsedata = {
                status: 200,
                message: "登录成功",
                success: true,
                data: value
            }
            res.json(responsedata);
        }

    })
});

// 获取指定用户信息 get请求
router.post('/api/add_user', function(req, res, next) {

    let urlParam = {
        username: req.body.username,
        pwd: req.body.pwd,
        email: req.body.email,
        mobile: req.body.mobile,

    };

    addUser(urlParam, function(success) {
        console.log(success)
        if (typeof(success) != 'undefined') {
            let responsedata = {
                status: 200,
                message: "注册成功，您可以登录了",
                success: true,
                data: success
            }
            res.json(responsedata);
        }
    })
});

// 获取指定用户信息 get请求
router.post('/api/update_user_pwd', function(req, res, next) {
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


// 修改用户的基本信息
router.post('/api/update_user_basic_info', function(req, res, next) {
    let urlParam = {
        username: req.body.username,
        hobby: req.body.hobby,
        major: req.body.major,
        constellatory: req.body.constellatory,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        autograph: req.body.autograph,
        uid: req.body.uid,
    };
    console.log('-------', urlParam);
    updateUserBasicInfo(urlParam, function(success) {
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