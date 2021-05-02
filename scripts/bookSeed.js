const mongoose = require('mongoose');
const db = require("../models/Book");
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI || 'mongodb://localhost/bookLibrary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookSeed = [
    {
        title: "The Sky is Everywhere",
        author: ["Jandy Nelson"],
        image: "something",
        description: "A story of grief and healing",
        link: "https://en.wikipedia.org/wiki/The_Sky_Is_Everywhere"
    }
];

db.deleteMany({})
  .then(
    db.collection.insertMany(bookSeed).then((data) => {
      console.log(data.result.n + " book(s) inserted!");
      process.exit(0);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });