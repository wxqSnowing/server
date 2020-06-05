var express = require('express');
var router = express.Router();

let { queryWork, insertWork, queryRankWork, queryRecommendWork, queryMineWork, queryWorkByWorkId, delteWorkByWorkId } = require("../dao/works/works_dao.js"); // 数据库操作


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
//
router.get('/api/get_work_detail_by_id', function(req, res, next) {
    let urlParam = {
        workid: req.query.workid
    };
    queryWorkByWorkId(urlParam, function(success) {
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

//
router.get('/api/delte_work_by_id', function(req, res, next) {
    let urlParam = {
        workid: req.query.workid
    };
    delteWorkByWorkId(urlParam, function(success) {
        if (typeof(success) != 'undefined') {
            let value = JSON.parse(JSON.stringify(success));
            console.log('~~~~~~~~~~~~~~~', value);
            let responsedata = {
                status: 200,
                message: "数据删除成功",
                success: true,
                data: value
            }
            res.json(responsedata);
        }
    })
});

//我的
router.get('/api/get_mine_work', function(req, res, next) {
    let urlParam = {
        uid: req.query.uid
    };
    queryMineWork(urlParam, function(success) {
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

// 获取ranks信息 get请求
router.get('/api/get_work_info_by_rank', function(req, res, next) {
    let urlParam = {
        type: req.query.type
    };
    queryRankWork(urlParam, function(success) {
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

// 获取ranks信息 get请求
router.get('/api/get_work_info_by_recommend', function(req, res, next) {
    let urlParam = {
        type: req.query.type
    };
    queryRecommendWork(urlParam, function(success) {
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