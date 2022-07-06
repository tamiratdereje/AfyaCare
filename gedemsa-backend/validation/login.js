const joi = require('joi');

const loginValidation = (value) => {
    const loginSchema = joi.object({
        email: joi.string().required().min(7),
        password: joi.string().required().min(4)
    });
    return loginSchema.validate(value);
}

module.exports.loginValidation = loginValidation;