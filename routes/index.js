const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');


const app = express();

app.use('/notes', tipsRouter);


module.exports = app;