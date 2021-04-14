import axios from "axios";

export default {
  saveBook: function (data) {
    return axios
    .post("/api/books", {
      title: data.title,
      authors: data.authors,
      description: data.description,
      image: data.image,
      link: data.link
    })
    .then(function (response) {
      console.log(response);
      alert('Book Saved')
    })
    .catch(function (error) {
      console.log(error);
    })
},

getBooks: function () {
  return axios.get('/api/books')
},

deleteBook: function (id) {
  return axios.delete(`/api/books/${id}`)
}

}

