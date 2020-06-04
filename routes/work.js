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


//通过oss上传封面图，其中遇到的问题是:上传后打开链接是下载，需要设置headers，client.put方法调用时使用
let OSS = require('ali-oss');
let client = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAI4G228rmk35WXbx4drEnw',
    accessKeySecret: '3EdlbZZ76BEzZvoXXbfp9swy2Ork5G',
    bucket: 'image-bucket-6',
});

async function uploadWorkImage(imagePath, callback) {
    try {
        const headers = {
                'Content-Type': 'image/jpg',
            }
            //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
        let newName = '/images/' + parseInt((Math.random() * 10000)) + '.jpg';
        console.log(newName, '@@@@####');

        let result = await client.put(newName, imagePath, { headers });
        callback(result);
    } catch (e) {
        console.log(e);
    }
}
//上传封面图
router.put('/api/add_work_image', function(req, res, next) {
    let imagePath = req.query.imagePath;
    uploadWorkImage(imagePath, function(success) {
        res.json(success);
    })
});


module.exports = router;