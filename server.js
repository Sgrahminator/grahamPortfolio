const express = require('express');
const app = express();
const cors = require('cors');

// Require mongoose configuration
require('./server/config/mongoose.config');

// Middlewares
app.use(cors()); 
app.use(express.json());

// Require routes
const projectRoutes = require('./server/routes/project.routes');
const userRoutes = require('./server/routes/user.routes');

// Use routes
app.use('/api', projectRoutes);
app.use('/api', userRoutes);

// Starting the server
app.listen(port, () => console.log(`Listening on port: ${port}`));
