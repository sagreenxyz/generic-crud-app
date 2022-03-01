// DEPENDENCIES
const express = require('express');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
// console.log(PORT);
const app = express();

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Generic CRUD Application...');
});

// LISTEN
app.listen(PORT, () => {
    console.log(`Generic CRUD App at http://localhost:${PORT}`);
});