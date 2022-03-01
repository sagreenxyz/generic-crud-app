const express = require('express');
const items = express.Router();
const Item = require('../models/items.js')

// INDEX
items.get('/', (req, res) => {
    // res.send('This is the index at /items');
    // res.send(Item);
    res.status(200).render('index',
        {
            items: Item,
            title: 'Index Page'
        }
    ); // ./views/index.jsx
});

// NEW
items.get('/new', (req, res) => {
    res.status(200).render('new');
});

// SHOW
items.get('/:arrayIndex', (req, res) => {
    // res.send(Item[req.params.arrayIndex]);
    if (Item[req.params.arrayIndex]) {
        res.render('Show', {
            item: Item[req.params.arrayIndex],
            index: req.params.arrayIndex
        });
    } else {
        res.render('error404');
    }
});

// CREATE
items.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if (req.body.isItem === 'on') {
        req.body.isItem === 'true';
    } else {
        req.body.isItem === 'false';
    };
    Item.push(req.body);
    // res.send(Item);
    res.status(200).redirect('/items');
});

// DELETE
items.delete('/:arrayIndex', (req, res) => {
    Item.splice(req.params.arrayIndex, 1);
    res.status(303).redirect('/items');
})

// UPDATE
items.put('/:arrayIndex', (req, res) => {
    if(req.body.isItem === 'on') {
        req.body.isItem = true;
    } else {
        req.body.isItem = false;
    };
    Item[req.params.arrayIndex] = req.body;
    res.redirect(`/items/${req.params.arrayIndex}`);
});

module.exports = items;
