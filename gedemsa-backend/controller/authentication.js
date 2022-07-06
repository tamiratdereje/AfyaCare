const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const {signupValidation} = require('../validation/signup');
const {loginValidation} = require('../validation/login');

const signup = async (req,res) => {

    const {error} = signupValidation(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});

    const emailExist = await User.findOne({email: req.email});
    if (emailExist) return res.status(401).json({message: "email is already taken or registered"});

    const hashedPassword = await User.encryptPassword(req.body.password);
    const newUser = new User({full_name : req.body.full_name, email : req.body.email, roles: req.body.roles, password: hashedPassword});
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.json({message: "user account created successfully"});
}

const login = async (req, res) => {

    const {error} = loginValidation(req.body);
    if(error) return res.status(400).json({message: error.details[0].message})
    
    const emailExist = await User.findOne({email: req.body.email});
    console.log(emailExist);
    if (!emailExist) return res.status(400).json({message: 'Invalid credential'});
    console.log("hello");
    const matchPassword = await User.comparePassword(req.body.password, emailExist.password);

    if (!matchPassword) return res.status(401).json({
        token: null,
        message: 'Invalid credential'
    });

    const token = jwt.sign({ id: emailExist._id }, process.env.SECRET_KEY, {});
    res.header("token",token)

    res.status(200).json({message : "you are logged in"});


}

const logout = async (req, res) => {
    res.header("token","");
    return res.status(200).json({
        message : "you are logged out"
    })

}

module.exports = {
    login,
    signup,
    logout
}