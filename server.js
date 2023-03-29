const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const PORT = 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {

  res.json(db)
  
}) 

app.post("/api/notes", (req, res) => {
  console.log(db) //array
  console.log(req.body) //holds the note info


  //fs.writeFile(overwrite the old .json with the new db array)
  res.json("hello")

})
app.post("/fun", (req, res) => {
  console.log(req.body)
  res.json("hello")

})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
