import axios from "axios";

const postBook = (data) => {
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
      alert('Saved!')
    })
    .catch(function (error) {
      console.log(error);
    })
}

export default postBook;
