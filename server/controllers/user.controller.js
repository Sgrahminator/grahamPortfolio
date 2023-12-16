const User = require('../models/user.model');

const userController = {
    // Get User Information
    getUserInfo: async (req, res) => {
        try {
            const userInfo = await User.findOne();
            res.json(userInfo);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Update User Information
    updateUserInfo: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.body.id, req.body, { new: true });
            res.json(updatedUser);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = userController;
