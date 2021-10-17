const Joi = require('joi');
const ApiError = require('../utils/APIError');
const httpStatus = require('http-status');

function registerValidation(req, res, next){
    const schema = Joi.object({
        name : Joi.string().required(),
        username : Joi.string().min(3).required(),
        email : Joi.string().email(),
        address : Joi.object().keys({
            street: Joi.string().min(3).required(),
            suite: Joi.string().required(),
            city: Joi.string().required(),
            zipcode: Joi.string().required(),
            geo: Joi.object().keys({
                lat: Joi.string().required(),
                lng: Joi.string().required()
            })
        }),
        phone : Joi.string().min(5).max(11).required(),
        website : Joi.string().required(),
        company : Joi.object().keys({
            name : Joi.string().required(),
            catchPhrase: Joi.string().required(),
            bs: Joi.string().required()
        })
    });
    const result = schema.validate(req.body);
    if(result.error){
        return res.status(400).send(result.error.details[0].message);
    }
    return next();
};


module.exports.registerValidation = registerValidation;
