const mongoose = require('mongoose');
const {Speciality} = require('../models/field');
const {Field} = require('../models/field');


const event = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    fields: [Field],

    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    available : {
        type: Boolean,
        default: false
    },
})

const Event = mongoose.model('Event', event);
module.exports = {Event : Event}