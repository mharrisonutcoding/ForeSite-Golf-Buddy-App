const router = require('express').Router();
const passwordRoutes = require('./password-routes');
const userRoutes = require('./user-routes');
const usernameRoutes = require('./username-routes');

router.use('/passwords', passwordRoutes);
router.use('/users', userRoutes);
router.use('/usernames', usernameRoutes);

module.exports = router;
