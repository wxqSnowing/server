// 对数据库中的works表进行增，删，查操作语句

module.exports = {
    queryWorkSQL: "select * from work_info where type = ? order by createtime desc limit ?;",
    rankWorkSQL: "select * from work_info where type = ? order by hotscore desc limit ?;",
    recommendWorkSQL: "select * from work_info where type = ? order by viewnums desc limit ?;",
    mineWorkSQL: "select * from work_info where uid = ? order by createtime desc",
    insertWorkSQL: "insert into work_info (uid, title, type, subtype, tags, content, image, description) values (?, ?, ?, ?, ?, ?, ?, ?);",
    queryWorkByWorkIdSQL: "select * from work_info where workid = ?;",
    delteWorkByWorkIdSQL: "delete from work_info where workid = ?;",
    updateWorkByWorkIdSQL: "update work_info set title=?, type=?, subtype=?, tags=?, content=?, image=?, description=? where workid = ?",
    updateWorkViewNumsSQL: "update work_info set viewnums=viewnums+1 where workid=?",
}