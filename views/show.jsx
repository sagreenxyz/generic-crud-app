const React = require('react');
const Default = require('./layouts/Default');

function Show({ item, index }) {
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
            <h4>Contents:</h4>
            <ul>
                {item.contents.map((content) =>
                    <li key={content}>{content}</li>
                )}
            </ul>
            <a href={`/items/${index}/edit`}><button>Edit</button></a>
            <form action={`/items/${index}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
            </form>
            <li><a href="/Items">Go Home</a></li>
        </Default>
    )
}

module.exports = Show;
