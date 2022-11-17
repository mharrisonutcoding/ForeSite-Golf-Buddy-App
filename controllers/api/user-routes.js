const router = require('express').Router();
const {User, Attribute} = require('../../models');
const withAuth = require('../../utils/auth');

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password']}
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new user
router.post('/', async (req, res) => {
 
    const newUserData = await User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      user_name: req.body.userName,
      password: req.body.password
    })

    const newAttr = await Attribute.create({
      competitive_game: req.body.compStyle,
      relaxed_game:req.body.laxStyle,
      gender:req.body.gender,
      handicap:req.body.handicap,
      user_id: newUserData.dataValues.id,
    })
    res.status(200).json({newUserData, newAttr})
});

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.create(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
