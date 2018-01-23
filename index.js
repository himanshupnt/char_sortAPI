const express = require("express");
const multer = require("multer");
const { strSorter } = require("./sorter");

const app = express();
const upload = multer();
const PORT = process.env.PORT || 8080;

app.use(express.static("client"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("internal server error!");
  next();
});
app.post("/sort", upload.array(), (req, res) => {
  const { unsorted } = req.body;
  const sorted = strSorter(unsorted);
  res.send({ sorted });
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
