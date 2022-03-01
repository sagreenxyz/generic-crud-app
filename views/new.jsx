const React = require('react');
const Default = require('./layouts/Default');

function New() {
    return (
        <Default>
            <h2>Add a New Item</h2>
            <form action="/items" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" />
                <label htmlFor="isItem">Is an Item?</label>
                <input type="checkbox" name="isItem" id="isItem" defaultChecked />
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = New;
