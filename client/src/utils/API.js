import axios from 'axios';

export default {
  searchBook: function (searchedTitle) {
    return axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchedTitle}`
      )
  },
};