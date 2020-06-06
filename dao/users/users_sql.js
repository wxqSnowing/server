// 对数据库中的users表进行增，删，查操作语句

module.exports = {
    queryUserSQL: "SELECT * FROM user_info where uid = ?;",
    addUserSQL: "insert into user_info (username, pwd) value (?, ?);",
    updateUserPwdSQL: "update user_info set pwd = ? where uid = ?;",
    loginUserCheckSQL: "select * from user_info where username = ? and pwd = ?;",
    updateUserBasicInfoSQL: "update user_info set username = ?, age = ?, major = ?, avatar = ?, constellatory = ?, hobby = ?, autograph = ?, address = ?, email = ? , mobile = ?, tags = ?, gender = ?, level = ?, activity = ?, usercircle = ? where uid = ?;",
}