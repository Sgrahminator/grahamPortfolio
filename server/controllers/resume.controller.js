const Resume = require('../models/resume.model');

// Create or Update resume
exports.createOrUpdateResume = async (req, res) => {
    try {
        const resumeData = await Resume.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(resumeData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get resume information
exports.getResume = async (req, res) => {
    try {
        const resumeData = await Resume.findOne();
        if (!resumeData) return res.status(404).json({ message: 'Resume not found' });
        res.json(resumeData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
