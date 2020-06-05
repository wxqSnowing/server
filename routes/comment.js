var express = require('express');
var router = express.Router();

let { queryWorkComment } = require("../dao/comment/comment_dao.js"); // 数据库操作

// 获取指定用户信息 get请求
router.get('/api/query_comment_by_workId', function(req, res, next) {
    let urlParam = {
        workid: req.query.workid
    };
    queryWorkComment(urlParam, function(success) {
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

module.exports = router;