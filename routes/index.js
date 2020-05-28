var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/api/add', function(req, res, next) {
    var query = req.query;
    res.json({
        status: 200,
        message: "post请求成功",
        success: true,
        data: {
            name: 'wxq',
            age: 3
        }
    })
});

module.exports = router;