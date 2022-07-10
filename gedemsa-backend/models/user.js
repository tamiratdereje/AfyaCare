const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    
    approved: {
        type: Boolean,
        default: false
    }
});

// hashing password
user.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

// comparePassword
user.statics.comparePassword = async (password, receivedPassword)=>{
    return await bcrypt.compare(password,receivedPassword)
};

module.exports = mongoose.model('User', user);