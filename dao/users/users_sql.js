// 对数据库中的users表进行增，删，查操作语句

module.exports = {
    queryUser: "SELECT * FROM user_info where uid = ?;",
}