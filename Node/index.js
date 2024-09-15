// app.js
const express = require('express');
const bodyParser = require('body-parser');
var cors = require("cors");
// Import bus routes

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Use the bus routes
const busRoutes = require("./routes/busRoutes");
const baseRoutes = require("./routes/baseRoutes");

app.use('/bus', busRoutes);
app.use('/base', baseRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});