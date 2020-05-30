var express = require('express');
var router = express.Router();

let { query } = require("../dao/search/search_dao.js"); // 数据库操作

// 获取指定用户信息 get请求
router.get('/api/search', function(req, res, next) {
    let urlParam = {
        queryKey: req.query.queryKey
    };
    query(urlParam, function(success) {
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