const Joi = require("joi");

const Validationschema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(5).max(12).required(),
    email: Joi.string().email().required(),
    location: Joi.string().required(),
    date: Date.now(),
}).required()


const LoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
}).required()

module.exports = {Validationschema, LoginSchema};