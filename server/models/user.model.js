const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    bio: {
        type: String,
        required: [true, "Short bio is required"],
        trim: true
    },
    detailedBio: {
        type: String,
        required: [true, "Detailed bio is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true
    },
    linkedIn: {
        type: String,
        required: [true, "LinkedIn profile link is required"],
        trim: true
    },
    resumeLink: {
        type: String,
        required: [true, "Resume link is required"],
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

