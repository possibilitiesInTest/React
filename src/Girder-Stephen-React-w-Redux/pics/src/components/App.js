import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 
                'Client-ID c67e1a5e3b5ab4e418d382a5f58bfa385daabd7067e0aab984ae4f6eb84340bd'
            }
        });

        this.setState({ images: response.data.results })
    }


    render() {
    return ( 
    <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
    </div>
    );
    }
}

export default App;