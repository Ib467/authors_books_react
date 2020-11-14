const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'please specify author name'
        ], 
        minlength: [
            3,
            'please provide a name that is at least 3 characters'
        ]
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('Author', AuthorSchema)