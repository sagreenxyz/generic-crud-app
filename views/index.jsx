const React = require('react');
const Default = require('./layouts/Default');

function Index({items}) {
    return (
        <Default>
            <h2>Index Page</h2>
            {/* This is a JSX comment. */}
            {/* <p>This is the item: {items[0].name}</p> */}
            <ul>
                {
                    
                }
            </ul>
        </Default>
    )
}

module.exports = Index;
