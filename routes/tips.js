const router  = require('express').Router();
const uuid  = require('uuid');
const {writeToFile, readFromFile, readAndAppend } = require('../helpers/fsUtils');



// GET Route for retrieving all the feedback
router.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
router.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const {title, text} = req.body;
console.log(req.body)
  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newFeedback = {
      title,
      text,
      id: uuid.v4()
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

router.delete('/:id', (req, res) => {
  const Id = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== Id);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`note ${Id} has been deleted 🗑️`);
    });
});


module.exports = router;
