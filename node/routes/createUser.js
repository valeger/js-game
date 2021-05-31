const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

router.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }, (err, user) => {
    if (err) return next(err);

    if (user) {
      if (user.checkPassword(password)) {
        res.send(user._id);
      } else {
        res.status(401).send();
      }
    } else {
      const user = new User({ username: username, password: password });
      user.save((err) => {
        if (err) return next(err);
        res.send(user._id);
      })
    }
  })
});

module.exports = router;
