var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/test', function(req, res, next) {
    res.json({
        status: 200,
        message: "get请求成功",
        success: true,
        data: {
            name: 'wxq',
            age: 3
        }
    })
});

module.exports = router;