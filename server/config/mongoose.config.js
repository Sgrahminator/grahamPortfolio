const mongoose = require('mongoose');

// Use the MONGODB_URI environment variable (in Heroku) first, otherwise use the local MongoDB URI
const DB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/grahamPortfolio";

mongoose.connect(DB_URI)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
