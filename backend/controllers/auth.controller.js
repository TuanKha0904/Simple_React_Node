const userModel = require('../models/user.model');

exports.register = async function (req, res) {
    try {
        const userExists = await userModel.checkExistedUser(req.body.LOGIN_ID);
        if (userExists) {
            return res.status(400).json({
                status: 400,
                message: 'User already exists'
            });
        }

        await userModel.register(req.body);
        return res.status(200).json({
            status: 200,
            message: 'Register successfully'
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
