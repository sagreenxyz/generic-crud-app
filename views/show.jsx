const React = require('react');
const Default = require('./layouts/Default');

function Show({item, index}) {
    console.log(item.name);
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{item.name}</h3>
            <p>
                and it
                {
                    item.isItem
                    ? <span> Is an Item</span>
                    : <span> Is NOT an Item</span>
                }
            </p>
            <img src={item.image} alt={item.name} />
            <form action={`/items/${index}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
            </form>
            <li><a href="/Items">Go Home</a></li>
        </Default>
    )
}

module.exports = Show;

// NOTE:  See 2022-02-28 18:47:00
