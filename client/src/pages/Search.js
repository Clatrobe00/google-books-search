import React, { useState } from 'react';
import axios from 'axios';
import SearchResult from '../components/SearchResult';

const Search = () => {

    const [searchVal, setSearchVal] = useState("")
    const [searchResults, updateSearchResults] = useState([])

    const handleInputChange = (e) => {
        setSearchVal(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchVal)
            .then(function (response) {
            // handle success
                updateSearchResults(response.data.items);
            })
            .catch(function (error) {
            // handle error
                console.log(error);
    })
}
console.log('updated results are', searchResults)

    return (
    <div>
        <div>
            <input type="text" class="inputtext" value={searchVal} id="text1" onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>    
        <div>
            {searchResults[0] ? searchResults.map(volume => {
                return (
                    <SearchResult title={volume.volumeInfo.title} authors={volume.volumeInfo.authors} description={volume.volumeInfo.description} image={volume.volumeInfo.imageLinks ? volume.volumeInfo.imageLinks.thumbnail : <p>no image</p>} link={volume.volumeInfo.infoLink} />
                )
            }) : <h1>No Results Yet</h1>}
        </div>
    </div>
    )
}

export default Search;