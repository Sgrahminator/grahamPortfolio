const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [String],
    githubLink: { type: String, required: true },
    image: String // Optional: URL to a screenshot or media related to the project
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
