// 对数据库中的search表进行查操作语句

module.exports = {
    queryKeySQL: "select * from key_info where queryKey = ? limit 5;",
}