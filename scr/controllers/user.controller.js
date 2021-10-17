const httpStatus = require('http-status');
const catchAsync =  require('../utils/catchAsync');
const ApiError = require('../utils/APIError');

// Load User model
const User = require('../models/User');

const getUsers =  catchAsync(async (req, res) => {
    const users = await User.find();
    res.json(users);
});

const getUserById = catchAsync(async (req, res) =>{
    const users = await User.find();
    const user = await users.find( user => user.id === req.params.id);
    if(!user){
        throw new ApiError(httpStatus.BAD_REQUEST, 'User Not Found');
    }
    res.json(user);
});

const registerUser = catchAsync(async (req, res) => {
        const user = await User.findOne({email : req.body.email})
        if(user){
            throw new ApiError(httpStatus.BAD_REQUEST, 'Email already exist');
        }
        else {
            const newUser = new User({
                name: req.body.name,
                username : req.body.username,
                email : req.body.email,
                address : req.body.address,
                phone : req.body.phone,
                website : req.body.website,
                company : req.body.company
            });
            await newUser.save()
            res.status(200).send('user registered successfully');
        }
});

const login = catchAsync( (req,res) => {
    await
})

const deleteUser = catchAsync(async (req, res) => {
    const users = await User.find();
    const user = await users.find( user => user.id === req.params.id)
    if(!user){
        throw new ApiError(httpStatus.BAD_REQUEST, 'User Not Exist');
    }
    user.remove();
    res.send(`Delete user with id ${req.params.id}`);
});

const updateUser = catchAsync(async (req, res) => {
    const  users = await User.find();
    const userObject = users.find(u => u.id === req.params.id);
    if (!userObject) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'The user with the given id was not found')
    }

    else {
        userObject.name = req.body.name;
        userObject.save();
        res.send(userObject);
    }
});

module.exports = {
    getUsers,
    getUserById,
    registerUser,
    deleteUser,
    updateUser,
    login
};
