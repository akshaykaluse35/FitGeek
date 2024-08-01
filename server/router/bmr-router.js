const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/user-models");

router.get('/bmr', (req, res) => {
    res.send('BMR calculation route');
});

module.exports = router;
