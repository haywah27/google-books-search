const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: { type: String, required: true},
    title: { type: String },
    author: { type: Array },
    image: { type: String },
    description: { type: String },
    link: { type: String },
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;