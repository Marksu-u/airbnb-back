const mongoose = require('mongoose');

// Create a schema Place with name, description, address, city, country, price, rating, images, owner that is a relation to User model, and typePlace form the typePlace model
const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    city: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    country: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 255
    },
    images: [
        {
            url: {
                type: String,
                required: true,
                trim: true,
                minlength: 2,
                maxlength: 255
            },
            filename: {
                type: String,
                required: true,
                trim: true,
                minlength: 2,
                maxlength: 255
            }
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    typePlace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypePlace'
    }
});

const Place = mongoose.model('Place', placeSchema);
