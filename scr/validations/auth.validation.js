const Joi = require('joi');
const ApiError = require('../utils/APIError');
const httpStatus = require('http-status');

function registerValidation(req, res, next){
    const schema = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        email : Joi.string().min(5).max(50).required().email(),
        password : Joi.string().min(5).max(255).required()
    });
    const result = schema.validate(req.body);
    if(result.error){
        return res.status(400).send(result.error.details[0].message);
    }
    return next();
};


function updateValidation(req, res, next){
    const updateSchema = Joi.object({
        name: Joi.string(),
        username: Joi.string()
    });
    const result = updateSchema.validate(req.body);
    if(result.error){
        return res.status(400).send(result.error.details[0].message);
    }
    return next();
}

function passwordValidation(req, res, next){
    const passwordSchema = Joi.object({
       password : Joi.string().min(5).max(50).required()
    });
    const result = passwordSchema.validate(req.body);
    if(result.error){
        return res.status(400).send(result.error.details[0].message);
    }
    return next();
}

module.exports.registerValidation = registerValidation;
module.exports.updateValidation = updateValidation;
module.exports.passwordValidation = passwordValidation;
