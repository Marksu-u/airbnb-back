const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/booking.controller');
const { checkAuth, checkIdentity, validation } = require("../middlewares/validators");

router.post('/', checkAuth, checkIdentity, validation, bookingController.createBooking);
router.get('/:id', checkAuth, checkIdentity, validation, bookingController.getOneBooking);

module.exports = router;
