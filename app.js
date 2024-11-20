const express = require('express');
const app = express();
const dontenv = require('dotenv').config();
const port = process.env.PORT;

app.use("/posts",require("./routes/posts"))
app.use("/posts/comments",require("./routes/comments"))

app.listen(port, () => {
    console.log(`App is listening at https://localhost:${port}`);
});