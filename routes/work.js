var express = require('express');
var router = express.Router();

let { queryWork, insertWork } = require("../dao/works/works_dao.js"); // 数据库操作

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

//新增作品
router.post('/api/add_work', function(req, res, next) {
    // title, type, subtype, tags, content, image
    let urlParam = {
        uid: parseInt(req.body.uid),
        title: req.body.title,
        type: req.body.type,
        subtype: req.body.subtype,
        tags: req.body.tags,
        content: req.body.content,
        image: req.body.image,
    };

    insertWork(urlParam, function(success) {
        if (typeof(success) != 'undefined') {
            let responsedata = {
                status: 200,
                message: "作品发布成功",
                success: true,
                data: success
            }
            res.json(responsedata);
        }
    })
});




module.exports = router;