const { Router } = require('express');
const router = Router();

const User = require('../models/User');

router.post('/signup', (req, res, next) => {
    const { username, email, password } = req.body;
    const user = new User({
        username: username,
        email: email,
        password: password
    })
    console.log(username, email, password)
    console.log(user)
    res.json({message: 'Received'})
})

router.post('/signin', (req, res, next) => {
    res.json('signin');
})

router.get('/me', (req, res, next) => {
    res.json('me');
})


module.exports = router;