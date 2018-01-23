const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer();
const PORT = process.env.PORT || 8080;

app.use(express.static("client"));
app.post("/sort", upload.array(), (req, res) => {
  const { unsorted } = req.body;
  const sorted = unsorted
    .split("")
    .sort()
    .join("");
  res.send({ sorted });
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
