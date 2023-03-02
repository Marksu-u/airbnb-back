const Booking = require('../models/booking.model');
const Place = require('../models/place.model');
const User = require('../models/user.model');

exports.createBooking = (req, res) => {
    const booking = new Booking({
        user: req.userToken.id,
        place: req.body.place,
        date: req.body.date,
        time: req.body.time,
        duration: req.body.duration,
        price: req.body.price,
        status: req.body.status
    })
    booking.save()
        .then((booking) => {
        res.send(booking)
        })
        .catch(err => {
        res.status(400).send(err)
        })
    }

exports.getOneBooking = (req, res) => {
    Booking.findById(req.params.id).populate('place').populate('user')
        .then((booking) => {
        if (!booking) {
            return res.status(404).send({
            message: "Booking not found"
            })
        }
        res.send(booking);
        })
        .catch(err => {
        res.status(400).send(err)
        })
    }
