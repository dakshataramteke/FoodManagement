const Joi = require("joi");

const Validationschema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(5).max(12).required(),
    email: Joi.string().email().required(),
    location: Joi.string().required(),
    date: Date.now(),
}).required()

module.exports = Validationschema;