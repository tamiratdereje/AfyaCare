const mongoose = require('mongoose');
        
const field = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

}); 

const Field = mongoose.model('Field', field);

module.exports = {
    Field : Field
}