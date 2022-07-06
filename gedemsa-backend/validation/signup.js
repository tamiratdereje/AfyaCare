const Joi = require('joi');

const signupValidation = (data) => {
    const signUpSchema = Joi.object({
        full_name : Joi.string().required().min(3),
        email: Joi.string().required().min(7),
        password: Joi.string().required().min(4),
        roles : Joi.string()
    });
    return signUpSchema.validate(data);
}
module.exports.signupValidation = signupValidation;