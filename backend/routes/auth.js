const router = require('express').Router();
const User = require('../models/user.model');

router.route('/signup').post(async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Error creating user' });
    }   
}); 

module.exports = router;