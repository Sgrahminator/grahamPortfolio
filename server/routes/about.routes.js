const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about.controller');

// POST route to create or update 'About Me' information
router.post('/', aboutController.createOrUpdateAbout);

// GET route to retrieve 'About Me' information
router.get('/', aboutController.getAbout);

module.exports = router;
