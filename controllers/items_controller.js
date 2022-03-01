const express = require('express');
const items = express.Router();
const Item = require('../models/items.js')

// INDEX
items.get('/', (req, res) => {
    // res.send('This is the index at /items');
    res.send(Item);
});

// SHOW
items.get('/:arrayIndex', (req, res) => {
    res.send(Item[req.params.arrayIndex]);
});

module.exports = items;
