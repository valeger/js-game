const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

router.put('/', (req, res, next) => {
  const score = +req.body.score;
  User.updateOne({ '_id' : req.body.id }, { 'score' : score }, (err, user) => {
    if (err) return next(err);
    res.end();
  })
});

module.exports = router;