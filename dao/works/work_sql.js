// 对数据库中的works表进行增，删，查操作语句

module.exports = {
    queryWorkSQL: "select * from work_info where type = ? order by createtime desc limit 8;",
    rankWorkSQL: "select * from work_info where type = ? order by hotscore desc limit 6;",
    recommendWorkSQL: "select * from work_info where type = ? order by viewnums desc limit 6;",
    insertWorkSQL: "insert into work_info (uid, title, type, subtype, tags, content, image) values (?, ?, ?, ?, ?, ?, ?);",
}