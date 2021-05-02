const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/bookRoutes");
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// api routes
app.use(routes);

// send all other files to react app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookLibrary", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log("Database Connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
