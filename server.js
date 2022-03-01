// DEPENDENCIES
const express = require('express');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
// console.log(PORT);
const app = express();

// MIDDLEWARE - This must be added before ROUTES
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Generic CRUD Application...');
});

// Items
const itemsController = require('./controllers/items_controller.js');
app.use('/items', itemsController);

// 404 Page
app.get('*', (req, res) => {
    res.send('404');
});

// LISTEN
app.listen(PORT, () => {
    console.log(`Generic CRUD App at http://localhost:${PORT}`);
});