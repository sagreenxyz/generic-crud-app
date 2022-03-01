const React = require('react');
const Default = require('./layouts/Default');

function Show({item}) {
    console.log(item.name);
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{item.name}</h3>
            <p>
                and it
                {
                    item.isItem
                    ? <span>Is an Item</span>
                    : <span>Is NOT an Item</span>
                }
            </p>
            <img src={item.image} alt={item.name} />
            <li><a href="/Items">Go Home</a></li>
        </Default>
    )
}

module.exports = Show;