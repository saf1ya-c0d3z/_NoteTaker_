const express = require('express');
const path = require('path');
const PORT = 3003;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.send(
    `<p>hi</p>`
  );
});
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
