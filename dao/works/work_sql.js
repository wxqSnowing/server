// 对数据库中的works表进行增，删，查操作语句

module.exports = {
    queryWorkSQL: "select * from work_info where type = ? order by hotscore desc limit 8;",
    insertWorkSQL: "insert into work_info (uid, title, type, subtype, tags, content, image) values (?, ?, ?, ?, ?, ?, ?);",
}