const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    pdfLink: { type: String, required: true },
    linkedInProfile: String
});

const Resume = mongoose.model('Resume', ResumeSchema);

module.exports = Resume;
