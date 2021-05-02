const Router = require("express").Router();
const Book = require("../models/Book.js");

Router.get("/api/books", async (req, res) => {
  Book.find({})
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(501);
      console.log("error in the get books route: ", err);
      res.send("something went wrong trying to get books");
    });
});

Router.post("/book", (req, res) => {
  try {
    console.log("new book: ", req.body);
    Book.create(req.body).then((res) => console.log(res));
    res.json({ message: "Book was saved!" });
  } catch (err) {
    res.status(501);
    console.log("error in the post book route: ", err);
    res.send("something went wrong trying to post book");
  }
});


module.exports = Router;
