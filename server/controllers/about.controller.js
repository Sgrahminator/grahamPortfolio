const About = require('../models/about.model');

// Create or Update 'About Me' information
exports.createOrUpdateAbout = async (req, res) => {
    try {
        const aboutData = await About.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(aboutData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get 'About Me' information
exports.getAbout = async (req, res) => {
    try {
        const aboutData = await About.findOne();
        if (!aboutData) return res.status(404).json({ message: 'About Me section not found' });
        res.json(aboutData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
