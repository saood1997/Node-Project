const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load Album Controller
const albumController = require('../../controllers/album.controller');

// @route  get api/albums
// @desc   getting all albums
// @access Public
router.get('/', albumController.getAlbums);

// @route  get api/albums/id
// @desc   get Album
// @access Public
router.get('/:id',  albumController.getAlbumsById);

// @route  Post api/albums/addAlbums
// @desc   Add Album
// @access Public
router.post('/addAlbums',albumController.addAlbum);

// @route  delete api/albums/id
// @desc   delete album
// @access Public
router.delete('/:id', albumController.deleteAlbum);

// @route  put api/albums/id
// @desc   Update album
// @access Public
router.put('/:id',albumController.updateAlbum);



module.exports = router;



