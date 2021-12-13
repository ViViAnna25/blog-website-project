const express = require("express");
const postRoutes = require("./controllers/post");
const app = express();
const port = 3000;
const cors = require('cors');

app.get("/", (req, res) => {
    res.send("Welcome to insert name here");
});

app.use("/posts", postRoutes);

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});

app.use(cors());