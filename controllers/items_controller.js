const express = require('express');
const items = express.Router();
const Item = require('../models/items.js')

// INDEX
items.get('/', (req, res) => {
    // res.send('This is the index at /items');
    // res.send(Item);
    res.render('index',
        {
            items: Item,
            title: 'Index Page'
        }
    ); // ./views.index.jsx
});

// NEW
items.get('/new', (req, res) => {
    res.render('new');
});

// SHOW
items.get('/:arrayIndex', (req, res) => {
    // res.send(Item[req.params.arrayIndex]);
    if (Item[req.params.arrayIndex]) {
        res.render('Show', {
            item: Item[req.params.arrayIndex]
        });
    } else {
        res.render('error404');
    }
});

// CREATE
items.post('/', (req, res) => {
    if(req.body.isItem === 'on') {
        req.body.isItem === 'true';
    } else {
        req.body.isItem === 'false';
    };
    Item.push(req.body);
    // res.send(Item);
    res.redirect('/items');
});

module.exports = items;
