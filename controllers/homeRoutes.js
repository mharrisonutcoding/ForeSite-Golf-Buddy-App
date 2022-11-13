const router = require('express').Router();
const {User, Attribute} = require('../models')

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
        res.render('playercards');

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


module.exports = router;