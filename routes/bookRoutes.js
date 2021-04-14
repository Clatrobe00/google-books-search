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
    console.log('recieved post request')
    console.log('req.body is', req.body)
    try {
    const book = await Books.create({
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
    })
    console.log('inserted');
    res.json(book);
    }
    catch (err) {
      console.log(err);
      res.json(err)
    }
    // Books.create(book)
    //   .then(() => {
    //     console.log('inserted!')
    //   })
    //   .catch((err) => {
    //     res.json(err)
    //   })
    });

Router.delete('/api/books/:id', async (req, res) => {
    res.send('Got a DELETE request at /user')
    Books.findOneAndRemove({ _id: req.params.id }, req.body, function(err,data)
    {
        if(!err){
            console.log("Deleted");
        }
    });
})    

Router.get('*', async (req, res) => {
    res.send('client/build/index.html')
})

  module.exports = Router;