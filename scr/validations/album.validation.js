const Joi = require('joi');

// const register = {
//     name : Joi.string().required(),
//     username : Joi.string().min(3).required(),
//     email : Joi.string().email(),
//     address : Joi.object().keys({
//         street: Joi.string().min(3).required(),
//         suite: Joi.string().required(),
//         city: Joi.string().required(),
//         zipcode: Joi.string().required(),
//         geo: Joi.object().keys({
//             lat: Joi.string().required(),
//             lng: Joi.string().required()
//         })
//     }),
//     phone : Joi.string().min(5).max(11).required(),
//     website : Joi.string().required(),
//     company : Joi.object().keys({
//         name : Joi.string().required(),
//         catchPhrase: Joi.string().required(),
//         bs: Joi.string().required()
//     })
// }
//
// module.exports = {
//     register
// }
