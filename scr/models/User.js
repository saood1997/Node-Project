const mongoose = require('mongoose');
const schema = mongoose.Schema;

const  authorSchema = new schema({
    name : {
        type: String,
        required : true
    },

    username : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required : true
    },
    address :  {
        street : String,
        suite :  String,
        city : String,
        zipcode : String,
        geo : { lat: String,
            lng: String,
        }
    },
    phone : {
        type: String,
        required : true
    },
    website : {
        type: String
    },
    company : {
        name : String,
        catchPhrase : String,
        bs : String
    }

});
const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
