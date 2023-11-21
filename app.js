const express = require("express");

// init app & middleware
const app = express();

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

// Routes
app.get("/books", (req, res) => {
  res.json({ mssg: "Welcome to the API" });
});
