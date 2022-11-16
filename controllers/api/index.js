const router = require('express').Router();
const passwordRoutes = require('./password-routes');
const userRoutes = require('./user-routes');
const attributeRoutes = require('./attributes-routes');

router.use('/passwords', passwordRoutes);
router.use('/users', userRoutes);
router.use('/attributes', attributeRoutes);


module.exports = router;
