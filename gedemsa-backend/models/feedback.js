const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    user : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'User'
    },  
    date : {
        type: Date,
        default: Date.now
    },  
    message : {
        type : String,
    }   
});



const FeedBack = mongoose.model('FeedBack', feedbackSchema);
module.exports = {FeedBack: FeedBack};