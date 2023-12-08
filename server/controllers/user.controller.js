const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

// Create a new user
router.post('/users/signup/', async (req, res) => {
    try {
        const { name, email, password, perms } = req.body;
        
        const encryptedPassword = jwt.sign(JSON.stringify(password), 'FitFlex',
            {algorithm: 'HS256'})

        const user = new User({ name, email, password: encryptedPassword, perms });

        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Validate if email and password match a user
router.post('/users/signin/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const encryptedPassword = jwt.sign(JSON.stringify(password), 'FitFlex',
            {algorithm: 'HS256'})

        try {
            const users = await User.find({ email: email, password: encryptedPassword });
            
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Bad JWT Token!' });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Get all users
router.get('/users/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a user by it's id
router.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.find({ _id: id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;