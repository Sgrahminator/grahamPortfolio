const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

// POST route to create a new project
router.post('/', projectController.createProject);

// GET route to retrieve all projects
router.get('/', projectController.getAllProjects);

// GET route to retrieve a specific project by id
router.get('/:id', projectController.getProjectById);

// PUT route to update a specific project by id
router.put('/:id', projectController.updateProject);

// DELETE route to delete a specific project by id
router.delete('/:id', projectController.deleteProject);

module.exports = router;
