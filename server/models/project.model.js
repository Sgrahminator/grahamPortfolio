const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true
    },
    technologies: {
        type: [String],
        required: [true, "Technologies are required"],
        default: []
    },
    githubLink: {
        type: String,
        required: [true, "GitHub link is required"],
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
