const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');  // Added for serving static files
const port = process.env.PORT || 8000;  // Updated to use environment variable for port
// Require mongoose configuration
require('./config/mongoose.config');

// Middlewares
app.use(cors()); 
app.use(express.json());

// Require routes
const projectRoutes = require('./routes/project.routes');
const userRoutes = require('./routes/user.routes');

// Use routes
app.use('/api', projectRoutes);
app.use('/api', userRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Starting the server
app.listen(port, () => console.log(`Listening on port: ${port}`));

