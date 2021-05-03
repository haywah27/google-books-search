import axios from "axios";

export default {
  searchBook: function (searchedTitle) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchedTitle}`
    );
  },

  saveBook: function (data) {
    return axios
      .post("/api/books", {
        id: data.id,
        title: data.title,
        author: data.author,
        image: data.image,
        description: data.description,
        link: data.link,
      })
      .then(function (response) {
        console.log("saved book", response);
        alert("Book saved");
      })
      .catch(function (err) {
        console.log("error in save book: ", err);
      });
  },

  getSavedBooks: function () {
    return axios.get("/api/books");
  },

  deleteBook: function (id) {
    return axios
      .delete(`/api/books/${id}`)
      .then(function (response) {
        console.log("deleted this id: ", response);
      })
      .catch(function (err) {
        console.log("error in delete book: ", err);
      });
  },
};
