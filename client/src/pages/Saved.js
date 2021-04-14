import React, { useState, useEffect } from 'react';
import API from '../utils/API';

const Saved = () => {

    const [savedBook, setSavedBook] = useState([]);

    useEffect(() => {
        API.getBooks()
        .then((response) => {
        let list = []    
        response.data.map(item => {
            list.push({
                title: item.title,
                authors: item.authors,
                desciption: item.description,
                image: item.image,
                link: item.link,
                id: item._id
            })
            })
        setSavedBook(list);    
        })
    }, [])

    const handleDeleteClick = (event) => {
        event.preventDefault();
        console.log('deleted!', event.target.value)
        API.deleteBook(event.target.value)
        setSavedBook(savedBook.filter((book) => {
            return book.id !== event.target.value; 
        }))
    
    }

    const RenderSavedBooks = savedBook.map((book) => (
        <div key={book.id}>
            <h4>{book.title}</h4>
            <h5>{book.authors}</h5>
            <p>{book.desciption}</p>
            <img src={book.image} />
            <a href={book.link} />
            <button value={book.id} onClick={handleDeleteClick}>Delete</button>
        </div>

    ))
    

    return (
        <div>
            <h1>Hello from Saved</h1>
            {savedBook[0] ? RenderSavedBooks : <h1>No Saved Books!</h1>}
        </div>
        
    )
}

export default Saved;