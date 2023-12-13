const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resume.controller');

// POST route to create or update resume information
router.post('/', resumeController.createOrUpdateResume);

// GET route to retrieve resume information
router.get('/', resumeController.getResume);

module.exports = router;
