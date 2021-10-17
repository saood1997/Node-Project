const mongoose = require('mongoose');
const httpStatus = require('http-status');
const catchAsync =  require('../utils/catchAsync');
const ApiError = require('../utils/APIError');

// Load Photo model
const Photo = require('../models/Photo');

const getPhotos = catchAsync( async (req, res) => {
    const photos = await Photo.find();
    res.json(photos);
});

const getPhotosById = catchAsync( async (req, res) => {
    const photos = await Photo.find();
    const photo = await photos.find(p => p.id === req.params.id);
    if(!photo){
        throw new ApiError(httpStatus.BAD_REQUEST, 'photo Not Found');
    }
    res.json(photo);
});

const addPhoto = catchAsync(async (req, res) => {
    const newPhoto = new Photo({
        albumId : mongoose.Types.ObjectId(req.body.userId),
        title : req.body.title,
        url : req.body.url,
        thumbnailUrl : req.body.thumbnailUrl
    });
    newPhoto.save()
        .then(() => res.json({msg : 'Add New photo'}))
        .catch(err => console.log(err))
});

const deletePhoto = catchAsync(async (req, res) => {
    const photos = await Photo.find();
    const photo = await photos.find( album => album.id === req.params.id)
    if (!photo){
        throw new ApiError(httpStatus.BAD_REQUEST,"Photo Not exist")
    }
    photo.remove();
    res.send(`Delete photo with id ${req.params.id}`);
});

const updatePhoto = catchAsync(async (req, res) => {
    const  albums = await Photo.find();
    const albumObject = albums.find(u => u.id === req.params.id);
    if (!albumObject){
        throw new ApiError(httpStatus.BAD_REQUEST,'The Album with the given id was not found');
    }
    else {
        albumObject.name = req.body.name;
        albumObject.save();
        res.send(albumObject);
    }
});

module.exports = {
    getPhotos,
    getPhotosById,
    addPhoto,
    deletePhoto,
    updatePhoto
}

