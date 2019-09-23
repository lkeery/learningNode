const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

// a forward slash is the home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
  // this builds localhost:3000/views/index.html
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/contact.html'));
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});