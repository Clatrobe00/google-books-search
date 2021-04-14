import React, { useState } from 'react';
import postBook from '../utils/API'

const SearchResult = (props) => {

    const [savedSearch, setSavedSearch] = useState({});

    const handleSaveClick = (event) => {
        event.preventDefault()
        const newBook = {
            title: props.title, 
            authors: props.authors, 
            description: props.description,
            image: props.image, 
            link: props.link}
        setSavedSearch(newBook)
        postBook(newBook);
    }

    console.log('savedSearch is', savedSearch);

    return (
        <div>
            <h4>{props.title}</h4>
            <h5>{props.authors}</h5>
            <p>{props.description}</p>
            <img src={props.image} />
            <button onClick={handleSaveClick}>Save this result!</button>
            <a href={props.link} target='_blank' rel='noreferrer'>
                <button>View this result!</button>
            </a>
        </div>
    )
}

export default SearchResult