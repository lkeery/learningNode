const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/contact', (req, res) => {
  res.send('On the contact page');
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});