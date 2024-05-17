const db = require("../untils/database");
const bcrypt = require("bcrypt");

const USER = function (user) {
    this.ID = user.ID;
    this.LOGIN_ID = user.LOGIN_ID;
    this.PASSWORD = user.PASSWORD;
    this.DEL_FLG = user.DEL_FLG;
};

USER.checkExistedUser = async function (loginId) {
    try {
        const [checkUser] =  await db.query("SELECT * FROM USER WHERE LOGIN_ID = ?", [loginId]);
        return checkUser.length > 0;
    } catch (err) {
        throw new Error('Database Error');
    }
};

USER.register = async function (data) {
    try {
        data.PASSWORD = bcrypt.hashSync(data.PASSWORD, 10);
        const [result] = await db.query("INSERT INTO USER (LOGIN_ID, PASSWORD) VALUES (?, ?)", [data.LOGIN_ID, data.PASSWORD]);
        return result;
    } catch (err) {
        throw new Error('Database Error');
    }
};

module.exports = USER;
