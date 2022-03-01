const React = require('react');

function Default(html) {
    return (
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                <div className="wrapper">
                    <header>
                        <h1><a href="/Items">Generic CRUD Application</a></h1>
                    </header>
                    <div className="container">
                        {html.children}
                    </div>
                </div>
            </body>
        </html>
    )
}

module.exports = Default;
