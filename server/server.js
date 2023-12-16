const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

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

// Starting the server
app.listen(port, () => console.log(`Listening on port: ${port}`));
