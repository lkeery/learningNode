const express = require('express');
const path = require('path');
const hbs = require('hbs');

const sql = require('./utils/sql');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// a forward slash is the home route
app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname + '/views'));
  res.render('home', {message: "Hi there!", anotherMessage: "Second message"});
  // this builds localhost:3000/views/index.html
})

app.get('/contact', (req, res) => {
  //res.sendFile(path.join(__dirname + '/views/contact.html'));
  res.render('contact', {contactMessage: "Hi there! You're on the contact page", otherMessage: "Other message", placeholder: "Your name"});
})

app.get('/users', (req, res) => {
  sql.getConnection((err, connection) => {
    // Error handling
    if (err) {
      return console.log(err.message);
    }

    // If successful
    let query = `SELECT * FROM tbl_card`;

    sql.query(query, (err, rows) => {
      // Release connection
      connection.release();

      if (err) {
        return console.log(err.message);
      }
      
      res.render('user', rows[0]);
    });
  })
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});