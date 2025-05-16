const Joi = require("joi");

const Validationschema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    location: Joi.string().required(),
    date: Date.now(),
}).required()

module.exports = Validationschema;