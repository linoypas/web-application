const express = require('express');
const app = express();
const dontenv = require('dotenv').config();
const port = process.env.PORT;
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",function (){
    console.log("conncted to database")
});

app.use("/posts",require("./routes/posts"))
app.use("/posts/comments",require("./routes/comments"))

app.listen(port, () => {
    console.log(`App is listening at https://localhost:${port}`);
});