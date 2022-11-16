const router = require('express').Router();
const {User, Attribute} = require('../../models');

// The `/api/usernames` endpoint
router.post('/:id', async (req, res) => {
  try {
    let userID = await User.findByPk(req.params.id);
    const newAttrData = await Attribute.create({
      gender: req.body.gender,
      handicap: req.body.handicap,
      competitive_game: req.body.compStyle,
      relaxed_game: req.body.laxStyle,
    })
    if (!userID) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;