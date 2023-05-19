import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// POST /api/users/
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    // console.log(name, email, password);
    const userExist = await User.findOne({email});

    if (userExist) {
        res.status(400);
        throw new Error('User is already exist');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}
);

// POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Auth user'});
});


// POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Logout user'});
});


// GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get user proile'});
});

// PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Update user profile'});
});


export {
    registerUser,
    authUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};