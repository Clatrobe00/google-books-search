const Router = require('express').Router();
const Books = require('../models/books');

Router.get("/api/books", async (req, res) => {
    console.log('getting books...')
    Books.find({})
      .then((data) => {
        console.log(data)
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
Router.post("/api/books", async (req, res) => {
    console.log(req.body)
    const book = new Books(req.body)
    Books.create(book)
        .then((newBook) => {
            res.json(newBook);
        })
        .catch((err) => {
            res.json(err);
          });

    });

Router.delete('/api/books/:id', async (req, res) => {
    res.send('Got a DELETE request at /user')
    Books.deleteOne({ id: req.params.id })
        .then((data) => {
            res.json('deleted', data, 'deleted')
        })
        .catch((err) => {
            res.json(err)
        })
})    

Router.get('*', async (req, res) => {
    res.send('client/build/index.html')
})

  module.exports = Router;