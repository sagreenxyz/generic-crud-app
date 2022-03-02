const React = require('react');
const Default = require('./layouts/Default');

function Edit({item, index}) {
    return (
        <Default>
            <h2>Edit an Item</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required defaultValue={item.name} />
                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" defaultValue={item.image} />
                <label htmlFor="isItem">Is Item?</label>
                <input type="checkbox" name="isItem" id="isItem" defaultChecked defaultValue={item.isItem} />
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit;