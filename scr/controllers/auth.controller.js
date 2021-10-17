const httpStatus = require('http-status');
const catchAsync =  require('../utils/catchAsync');
const ApiError = require('../utils/APIError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/keys').secretKey
const User = require('../models/Auth');

const login = catchAsync(async (req, res) => {
    const password = req.body.password;
    // console.log(req.body);

    // Find User by email
    const user = await User.findOne({email : req.body.email});
    // check for user
    if(!user){
        return res.status(403).send('Invalid email or password');
    }
    const hashPassword = user.password;
    // check password
    const isMatch = await bcrypt.compare(password, hashPassword);
    if(isMatch){
        const token = user.generateAuthToken();
        // return res.header('login-token',token).send('Successfully Login');
        return res.send(token);
    }
    res.status(403).send('Invalid email or password');
});



const registerUsers = catchAsync(async (req, res) => {
    let user = await User.findOne({email : req.body.email});

    if(user){
        return res.status(403).send({ msg: 'Already email exists'})
    }
    else {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        });
        await newUser.save();
        res.status(200).send('user registered successfully');
    }
});


const getProfile = catchAsync( async (req, res) => {
    const profile = await User.findOne({_id : req.user.id});
    if(!profile) return res.status(404).send('There is no profile for this user');
    res.send(profile);
});


const editProfile = catchAsync(async (req, res) => {
    const userObject = await User.findOne({_id : req.user.id});
    if(!userObject) return res.status(404).send('User Not Found');
    userObject.name = req.body.name;
    userObject.username = req.body.username;
    userObject.save();
    return res.status(200).send('User Update');
});

const changePassword = catchAsync( async (req, res) => {
    const userObject = await User.findOne({_id : req.user.id});
    if(!userObject) return res.status(404).send('User Not Found');
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);


});

const logout = catchAsync(async (req, res) => {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

module.exports = {
    logout,
    editProfile,
    changePassword,
    login,
    registerUsers,
    getProfile
};
