const CUSTOMER = require("../models/customer.model");

exports.getListCustomers = async function (req, res) {
    try {
        const listCustomer = await CUSTOMER.getListCustomers(req.query);
        return res.status(200).json({
            status: 200,
            customers: listCustomer
        });
    } catch (error) {
        if (error.message === 'Database Error') {
            return res.status(500).json({
                status: 500,
                message: 'Database error'
            });
        }
        return res.status(500).json({
            status: 500,
            message: 'System error'
        });
    }
};