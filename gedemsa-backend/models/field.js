const mongoose = require('mongoose');
        
const field = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    speciality: [SpecialitySChema]

}); 

const SpecialitySChema = new mongoose.Schema({
    name: String
}); 

const Speciality = mongoose.model('Speciality', SpecialitySChema);
const Field = mongoose.model('Field', field);

module.exports = {
    Speciality : Speciality,
    Field : Field
}