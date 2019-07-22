import React from 'react';

class SearchBar extends React.Component {
    render() {
        return( 
        <div className="ui segment">
            <form className="ui form" style={{ marginTop: '10px' }}>
                <label>Image Search</label>
                <input type="text" />
            </form>
        </div>
        )
    }
}

export default SearchBar;