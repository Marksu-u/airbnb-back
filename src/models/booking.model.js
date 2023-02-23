const mongoose = require('mongoose');

// create a schema for booking using place and user model
const bookingSchema = new mongoose.Schema({
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bookingDcleaate: {
        type: Date,
        required: true
    },
    rent : {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
