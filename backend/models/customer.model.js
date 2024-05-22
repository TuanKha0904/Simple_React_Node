const db = require("../untils/database");
const CUSTOMER = function (customer) {
    this.ID = customer.ID;
    this.CUSTOMER_ID = customer.CUSTOMER_ID;
    this.FIRST_NAME = customer.FIRST_NAME;
    this.LAST_NAME = customer.LAST_NAME;
    this.EMAIL = customer.EMAIL;
    this.PHONE_NUMBER = customer.PHONE_NUMBER;
    this.ADDRESS = customer.ADDRESS;
    this.AVATAR = customer.AVATAR;
    this.CREATED_BY = customer.CREATED_BY;
    this.UPDATED = customer.UPDATED;
    this.SELLER_ID = customer.SELLER_ID;
    this.DELETED_FLG = customer.DELETED_FLG;
};

CUSTOMER.getListCustomers = async function (data) {
    try {
        const [result] = await db.query("SELECT * FROM CUSTOMERS WHERE DELETED_FLG = 0 AND SELLER_ID = ? AND CREATED_BY = ?", [data.SELLER_ID || null, data.CREATED_BY]);
        return result;
    } catch (err) {
        throw new Error('Database Error');
    }
};

module.exports = CUSTOMER;
