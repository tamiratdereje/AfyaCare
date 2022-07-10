const mongoose = require('mongoose');

const trainingRecordSchema = new mongoose.Schema({

    schedule : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TrainingSchedule'
    },

    attendants: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },

});

const TrainingRecord = mongoose.model('TrainingRecord', trainingRecordSchema);

module.exports = {TrainingRecord: TrainingRecord}