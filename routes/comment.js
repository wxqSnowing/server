var express = require('express');
var router = express.Router();

let { queryWorkComment, addComment } = require("../dao/comment/comment_dao.js"); // 数据库操作

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

//新增评论
router.post('/api/add_comment', function(req, res, next) {
    // title, type, subtype, tags, content, image
    let urlParam = {
        workid: parseInt(req.body.workid),
        uid: parseInt(req.body.uid),
        comment: req.body.comment,
    };

    addComment(urlParam, function(success) {
        if (typeof(success) != 'undefined') {
            let responsedata = {
                status: 200,
                message: "评论发布成功",
                success: true,
                data: success
            }
            res.json(responsedata);
        }
    })
});

module.exports = router;