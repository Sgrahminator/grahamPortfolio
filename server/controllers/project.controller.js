const Project = require('../models/project.model');

const projectController = {
    // Get All Projects
    getAllProjects: async (req, res) => {
        try {
            const projects = await Project.find();
            res.json(projects);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Get Project by ID
    getProjectById: async (req, res) => {
        try {
            const project = await Project.findById(req.params.id);
            if (!project) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.json(project);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Create a New Project
    createProject: async (req, res) => {
        try {
            const newProject = new Project(req.body);
            await newProject.save();
            res.status(201).json(newProject);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Update a Project
    updateProject: async (req, res) => {
        try {
            const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProject) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.json(updatedProject);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Delete a Project
    deleteProject: async (req, res) => {
        try {
            const deletedProject = await Project.findByIdAndDelete(req.params.id);
            if (!deletedProject) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.json({ message: 'Project deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = projectController;
