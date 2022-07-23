const express = require('express');
const app = express();
const location = __dirname;

app.use(express.static(location));

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(3000, () => {
  console.log('Server running on port 3000 :) - http://localhost:3000');
});