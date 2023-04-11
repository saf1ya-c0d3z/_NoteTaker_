const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3000;
const app = express();
const api = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.use('/api', api);

// app.post("/api/notes", (req, res) => {
//   console.log(db) //array
//   console.log(req.body) //holds the note info


//   //fs.writeFile(overwrite the old .json with the new db array)
//   res.json("hello")

// })


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
