const mongoose = require("mongoose");

const database = () => {
  mongoose.connect("mongodb+srv://admin:admin@cluster0.fvnot.mongodb.net/IMDB?retryWrites=true&w=majority")
  
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });
}

module.exports = database;