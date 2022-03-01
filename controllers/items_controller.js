const express = require('express');
const items = express.Router();

// INDEX
items.get('/', (req, res) => {
    res.send('This is the index at /items');
});

module.exports = items;
