const mongoose = require('mongoose');

const eventScheculeSchema = new mongoose.Schema({
    date : {
        type: Date,
        defualt: Date.now,
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Event'
    },
    field: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Field'
    },
    participant: {
        type: [mongoose.Schema.Types.ObjectId],
        ref : 'User'
    },
    
})

const EventSchedule = mongoose.model('EventSchedule', eventScheculeSchema);

module.exports = {EventSchedule: EventSchedule}