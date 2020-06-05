// 对数据库中的comment表进行增，删，查操作语句

module.exports = {
    queryWorkCommentSQL: "SELECT * FROM work_comment_info where workid = ?;",
}