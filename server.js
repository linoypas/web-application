const express = require('express');
const dontenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",require("./routes/posts"))
app.use("/",require("./routes/comments"))
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",function (){
    console.log("conncted to database")
});

const initApp = () => {
  return new Promise((resolve, reject) => {
    if (!process.env.DB_CONNECT) {
      reject("DB_CONNECT is not defined in .env file");
    } else {
      mongoose
        .connect(process.env.DB_CONNECT)
        .then(() => {
          resolve(app);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};
module.exports = initApp;