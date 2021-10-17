const httpStatus = require('http-status');
const catchAsync =  require('../utils/catchAsync');
const ApiError = require('../utils/APIError');
const mongoose = require('mongoose');

// Load Album model
const Album = require('../models/Album');

const getAlbums = catchAsync(async (req, res) => {
    const albums = await Album.find();
    res.json(albums);
});

const getAlbumsById = catchAsync(async (req, res) =>{
    const albums = await Album.find();
    const album = await albums.find( user => user.id === req.params.id);
    if(!album){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Album Not Found');
    }
    res.json(album);
});

const addAlbum = catchAsync(async (req, res) => {
    const newAlbum = new Album({
        userId : mongoose.Types.ObjectId(req.body.userId),
        title : req.body.title
    });
    newAlbum.save()
        .then(() => res.json({msg : 'Add New Album'}))
        .catch(err => console.log(err))
});

const deleteAlbum = catchAsync( async (req, res) => {
    const albums = await Album.find();
    const album = await albums.find( album => album.id === req.params.id);
    if(!album){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Album Not Exist');
    }
    album.remove();
    res.send(`Delete Album with id ${req.params.id}`);
});

const updateAlbum = catchAsync(async (req, res) => {
    const  albums = await Album.find();
    const albumObject = albums.find(u => u.id === req.params.id);
    if (!albumObject) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'The album with the given id was not found');
    }

    else {
        albumObject.name = req.body.name;
        albumObject.save();
        res.send(albumObject);
    }
});

module.exports = {
    getAlbums,
    getAlbumsById,
    addAlbum,
    deleteAlbum,
    updateAlbum,
}
