const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load Photo Controller
const photoController = require('../../controllers/photo.controller');

// @route  get api/photos
// @desc   getting all photos
// @access Public
router.get('/', photoController.getPhotos);

// @route  get api/photos/id
// @desc   get Album
// @access Public
router.get('/:id', photoController.getPhotosById);

// @route  Post api/albums/addAlbums
// @desc   Add Album
// @access Public
router.post('/addPhoto',photoController.addPhoto);

// @route  delete api/albums/id
// @desc   delete album
// @access Public
router.delete('/:id',photoController.deletePhoto);

// @route  put api/photos/id
// @desc   Update album
// @access Public
router.put('/:id', photoController.updatePhoto);


module.exports = router;
