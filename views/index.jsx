const React = require('react');
const Default = require('./layouts/Default');

function Index({items, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* This is a JSX comment. */}
            {/* <p>This is the item: {items[0].name}</p> */}
            <ul>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={`/items/${index}`}>
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/items/new"><button>Add a New Item</button></a>
            </div>
        </Default>
    )
}

module.exports = Index;
