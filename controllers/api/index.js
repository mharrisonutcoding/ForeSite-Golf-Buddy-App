const router = require('express').Router();
const passwordRoutes = require('./password-routes');
const userRoutes = require('./user-routes');


router.use('/passwords', passwordRoutes);
router.use('/users', userRoutes);


module.exports = router;
