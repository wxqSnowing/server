var express = require('express');
var router = express.Router();

let { queryWork } = require("../dao/works/works_dao.js"); // 数据库操作

// 获取指定用户信息 get请求
router.get('/api/get_work_info', function(req, res, next) {
    let urlParam = {
        type: req.query.type
    };
    queryWork(urlParam, function(success) {
        if (typeof(success) != 'undefined') {
            let value = JSON.parse(JSON.stringify(success));
            let responsedata = {
                status: 200,
                message: "数据获取成功",
                success: true,
                data: value
            }
            res.json(responsedata);
        } else {
            let responsedata = {
                status: 200,
                message: "没有数据",
                success: true,
                data: []
            }
            res.json(responsedata);
        }

    })
});

module.exports = router;