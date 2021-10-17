const secretKey = require('../config/keys').secretKey
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserRegSchema = new schema({
   name : {
       type : String,
      required : true
   },
    username : {
       type : String,
        required : true
    },
   email : {
       type : String,
       unique : true,
       required : true
   },
   password : {
       type : String,
       required : true
   }
});

UserRegSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({id : this.id, name : this.name}, secretKey, {expiresIn: 3600});
    return token;
}

const user = mongoose.model('user', UserRegSchema);

module.exports = user
