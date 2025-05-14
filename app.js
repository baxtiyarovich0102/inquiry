const express = require('express');
const app = express();
const inquiryRoutes = require('./routes/inquiry.routes');

app.use(express.json());
app.use('/inquiries', inquiryRoutes);

module.exports = app;