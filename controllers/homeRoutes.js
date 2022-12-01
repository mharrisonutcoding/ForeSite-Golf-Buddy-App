const router = require("express").Router();
const { User, Attribute } = require("../models");
const withAuth = require("../utils/auth");

// getting homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// getting login page
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// getting list of player cards page
router.get("/playercards", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [Attribute],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    console.log(users);
    res.render("playercards", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

// getting profile page
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Attribute }],
    });
    console.log(userData);

    const user = userData.get({ plain: true });

    // const golfer = userData.attributes.reduce((prev, current) => {
    //   if (prev[current.category]) {
    //     prev[current.category].push(current.get({ plain: true }));
    //   } else {
    //     prev[current.category] = [current.get({ plain: true })];
    //   }
    //   return prev;
    // }, {});
    // console.log(attributes);

    res.render("profile", {
      ...user
      // attributes,
      // logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// getting signup page
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// getting chat page
router.get("/chat", async (req, res) => {
  try {
    res.render("chat");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
