// this is copy and pasted from middleware lesson (week 14, lesson 20)
// to be modified as needed

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;