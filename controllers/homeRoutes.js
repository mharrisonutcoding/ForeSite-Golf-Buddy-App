const router = require('express').Router();
const {User, Attribute} = require('../models')
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
    try {
        res.render('homepage');

    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/login', async (req, res) => {
    try {
        res.render('login');

    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/playercards', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [Attribute]
        })
        const users = userData.map(user => user.get({plain: true}))
        console.log(users);
        res.render('playercards', {users});

    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/profile', async (req, res) => {
    try {
        res.render('profile');

    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');

    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/chat', async (req, res) => {
    try {
        res.render('chat');

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;