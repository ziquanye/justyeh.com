let db = require('../db/DBUtil');

class Tag {

    //根据TagId获取Tag
    one(tagId, callback) {
        let sql = "SELECT id,name,description FROM tags where id = ?";
        db.query(sql, [tagId], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result[0]);
        });
    }

    searchTagsByName(tageName, callback) {
        let sql = "SELECT id,name FROM tags where name like ? LIMIT 6";
        db.query(sql, ['%' + tageName + '%'], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result);
        });
    }

    addTag(tageName, callback) {
        let sql = 'INSERT INTO tags (name) VALUES (?)'
        db.query(sql, [tageName], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result.insertId);
        });
    }

}

module.exports = Tag;