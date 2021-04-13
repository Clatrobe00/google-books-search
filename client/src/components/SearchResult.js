import React from 'react';

const SearchResult = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <h5>{props.authors}</h5>
            <p>{props.description}</p>
            <a href={props.link}>More info here</a>
            <img src={props.image} />
            <button>Save this result!</button>
        </div>
    )
}

export default SearchResult