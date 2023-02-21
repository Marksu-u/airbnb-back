const mongoose = require('mongoose');

// Create a schema typePlace with name, description, places that is a relation to Place model
const typePlaceSchema = new mongoose.Schema({
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
    places: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    }]
});

const TypePlace = mongoose.model('TypePlace', typePlaceSchema);