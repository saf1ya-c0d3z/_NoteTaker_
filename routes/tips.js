const fb = require('express').Router();

const { router } = require('.');
const {writeToFile, readFromFile, readAndAppend } = require('../helpers/fsUtils');



// GET Route for retrieving all the feedback
fb.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
fb.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const {title, text} = req.body;
console.log(req.body)
  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newFeedback = {
      title,
      text,
    };

    readAndAppend(newFeedback, "./db/db.json")

    const response = {
      status: 'success',
      body: newFeedback,
    };
console.log("response", response)
    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

router.get('/notes', (req,res) =>

);

module.exports = fb;
