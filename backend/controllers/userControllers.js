import asyncHandler from 'express-async-handler';

// POST /api/users/
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register user'});
});

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