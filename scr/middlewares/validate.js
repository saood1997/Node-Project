
const Joi = require('joi');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

// function validate(auth,schema){
//     schema.validate(auth);
// }

// const validate = (schema) => (req, res, next) => {
//
//     const {error, value} = Joi.compile(schema,);
//     if (error) {
//         return next(new ApiError(httpStatus.FORBIDDEN, "Invalid email or password"));
//     }
//     return next();
// };


// module.exports = validate;
