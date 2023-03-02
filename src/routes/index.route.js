const express = require('express');
const router = express.Router();

const authRouter = require('./auth.route.js');
const userRouter = require('./user.route.js');

const errorHandler = require('../middlewares/errorHandler');

router.use(errorHandler);

router.use('/auth', authRouter);
router.use('/user', userRouter);

module.exports = router;