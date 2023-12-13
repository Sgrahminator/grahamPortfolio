const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/mongoose.config'); 

// Import routes
const projectRoutes = require('./routes/project.routes');
const aboutRoutes = require('./routes/about.routes');
const resumeRoutes = require('./routes/resume.routes');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/resume', resumeRoutes);

// Export the app
module.exports = app;
