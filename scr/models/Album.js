const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    title : {
        type: String,
        required: true
    }
});
const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
