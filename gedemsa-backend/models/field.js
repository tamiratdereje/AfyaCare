const mongoose = require('mongoose');
        
const field = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    
    speciality: [Speciality]

}); 

const Speciality = new mongoose.Schema({
    name: String
}); 


module.exports = mongoose.model('Speciality', Speciality);
module.exports = mongoose.model('Field', field);