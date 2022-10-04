const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const bookRoutes = require('./bookcont');


router.use('/users', userRoutes);
router.use('/books', bookRoutes);

module.exports = router;