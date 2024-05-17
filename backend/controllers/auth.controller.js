const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;


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

exports.login = async function (req, res) {
    try {
        const user = await userModel.checkExistedUser(req.body.LOGIN_ID);
        if (user && bcrypt.compareSync(req.body.PASSWORD, user.PASSWORD) && user.DEL_FLG === 0) {
            const token = jwt.sign({ userId: user.ID, loginId: user.LOGIN_ID }, secretKey, { expiresIn: '2h' });
            return res.status(200).json({
                status: 200,
                user: user.ID,
                token: token
            });
        }
        return res.status(400).json({
            status: 400,
            message: 'Invalid login information'
        })
        
    } catch (error) {
        if (error.message === 'Database Error') {
            return res.status(500).json({
                status: 500,
                message: 'Database error'
            });
        }
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}
