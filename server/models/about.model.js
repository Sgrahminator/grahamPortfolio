const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    bio: { type: String, required: true },
    journey: String,
    aspirations: String,
    headshotUrl: { type: String, required: true } // URL to headshot image
});

const About = mongoose.model('About', AboutSchema);

module.exports = About;