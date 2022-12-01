const router = require("express").Router();
const { User, Attribute } = require("../../models");

// make a user route
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to login
router.post("/login", async (req, res) => {
  try {
    // we search the DB for a user with the provided email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      // the error message shouldn't specify if the login failed because of wrong email or password
      res.status(404).json({ message: "Login failed. Please try again!" });
      return;
    }
    // use `bcrypt.compare()` to compare the provided password and the hashed password
    const validPassword = await userData.checkPassword(
      req.body.password,
    );
    // if they do not match, return error message
    if (!validPassword) {
      res.status(400).json({ message: "Login failed. Please try again!2" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email= userData.email;
      req.session.logged_in = true;
      
    // if they do match, return success message
    res.status(200).json({ message: "You are now logged in!" });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new user
router.post("/signup", async (req, res) => {
  try {
    const newUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      user_name: req.body.user_name,
      password: req.body.password,
    });

    const newAttr = await Attribute.create({
      competitive_game: req.body.compStyle,
      relaxed_game: req.body.laxStyle,
      gender: req.body.gender,
      handicap: req.body.handicap,
      user_id: newUserData.dataValues.id,
    });
    res.status(200).json({ newUserData, newAttr });
  } catch {}
});

// GET one user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
