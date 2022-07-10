const mongoose = require('mongoose');


const userRecordSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rank: {
        type: Number,
        min: 1
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },

    field: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Field'
    },
})

const UserRecord = mongoose.model('UserRecord', userRecordSchema);

module.exports = { UserRecord: UserRecord }
