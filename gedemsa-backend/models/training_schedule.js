const mongoose = require('mongoose');

const trainingScheduleSchema = new mongoose.Schema({

    location: {
        type: String,
        default: true
    },
    trainingType: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },

    field: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Field"
    },
    
})
const TrainingSchedule = mongoose.model('TrainingSchedule', trainingScheduleSchema);
module.exports = {TrainingSchedule : TrainingSchedule}