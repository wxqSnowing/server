// 对数据库中的users表进行增，删，查操作语句

module.exports = {
    queryUserSQL: "SELECT * FROM user_info where uid = ?;",
}