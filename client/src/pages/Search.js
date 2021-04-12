import React, { useState } from 'react';

const Search = () => {

    const [searchVal, setSearchVal] = useState("")

    const handleInputChange = (e) => {
        setSearchVal(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('final searchVal is', searchVal)
    }

    return (

    <div>
        <input type="text" class="inputtext" value={searchVal} id="text1" onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
    </div>    

    )
}

export default Search;