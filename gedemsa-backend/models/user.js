const mongoose = require('mongoose');

const user = new mongoose.Schema({
    full_name : {
        type: String,
        required: true,
        trim: true
    },

    email : {
        type: String,
        requiered: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    roles: {
        type: String,
        requiered: true,
        default: 'athlet',
        enum: ['athlet', 'coach', 'admin']
    },

    field : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Field"
    },
    speciality : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Speciality"
    },

    approved: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('User', user);