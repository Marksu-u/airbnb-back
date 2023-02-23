const express = require('express');
const router = express.Router();

const authRouter = require('./authRoute');
// const userRouter = require('./userRoute');

const errorHandler = require('../middlewares/errorHandler');

router.use(errorHandler);

router.use('/auth', authRouter);
// router.use('/user', userRouter);

module.exports = router;