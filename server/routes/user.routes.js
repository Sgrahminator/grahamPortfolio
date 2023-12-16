const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Route to get user information
router.get('/user', userController.getUserInfo);

// Route to update user information
router.put('/user', userController.updateUserInfo);

module.exports = router;
