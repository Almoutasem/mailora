require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/builder.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Mailora running on port ${PORT}`));
