const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer();
const PORT = process.env.PORT || 8080;

app.use(express.static("client"));
app.listen(PORT, () => console.log("server running"));
