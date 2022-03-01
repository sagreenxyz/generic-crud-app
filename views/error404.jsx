const React = require('react');
const Default = require('./layouts/Default');

function Error404() {
    return (
        <Default>
            <h2>Error Page</h2>
            <a href="/Items">Go Home</a>
        </Default>
    )
}

module.exports = Error404;
