const router = require('express').Router();
const Golfer = require('../../models/User');

// The `/api/usernames` endpoint

router.get('/', (req, res) => {
  // find all username
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single username by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new username
});

router.put('/:id', (req, res) => {
  // update a username's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on username by its `id` value
});

module.exports = router;