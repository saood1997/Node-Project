const auth = require('../../middlewares/auth');
const express = require('express');
const userValidation = require('../../validations/auth.validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

// Load User Controller
const userController = require('../../controllers/user.controller');

// @route  get api/users
// @desc   get User
// @access Public
router.get('/',userController.getUsers);

// @route  get api/users/:id
// @desc   get User
// @access Public
router.get('/profile',  userController.getUserById);

// @route  Post api/users/register
// @desc   Register User
// @access Public
router.post('/register', auth , userValidation.registerValidation,userController.registerUser);

// @route  delete api/users/:id
// @desc   delete User
// @access Public
router.delete('/:id',userController.deleteUser);


// @route  Put api/users/:id
// @desc   update existing User
// @access Public
router.put('/:id', userController.updateUser);



// router.post('/login', (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     User.findOne({email}).
//
// });


module.exports = router;
