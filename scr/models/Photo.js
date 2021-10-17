const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    albumId : {
        type : mongoose.Schema.ObjectId,
        required : true
    },
    title : {
        type: String,
        required : true
    },
    url : {
        type: String,
        required: true
    },
    thumbnailUrl : {
        type: String,
        required:true
    }
});
const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;
