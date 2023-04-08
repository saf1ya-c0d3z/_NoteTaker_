const { Router } = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');



const app = Router();

app.use('/notes', tipsRouter);



module.exports = app;