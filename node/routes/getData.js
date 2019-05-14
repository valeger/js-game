const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

router.get('/', (req, res, next) => {
  User.find((err, data) => {
    if (err) return next(err);
    res.json(data.map(user => ({
      'username': user.username,
      'score': user.score,
      'created': user.created
    })));
  })
});

module.exports = router;