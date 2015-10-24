var express = require('express');
var router = express.Router();
var User = require('../models/user');
var ensureAuthenticated = require('../routes/auth');

router.get('/', ensureAuthenticated,function(req, res, next) {
  res.send('hey there!');
});



// // CREATE/POST ship to user
router.put('/ship', function(req, res, next) {
  var update = {
    ships: [req.body.shipname]
  };
  // console.log(update);
  User.findByIdAndUpdate(req.body.id,update, function(err, user) {
    // console.log(user.ships);
    if (err) {
      res.json({
        'message': err
      });
    } else {
      user.save(function(err, data) {
        if (err) {
          res.json({
            'message': err
          });
        } else {
          data.ships.push(update);
          res.json(data);
          console.log(data);
        }
      });
    }
  });
});

router.get('/:username/ships', function(req, res, next) {
  User.findById(req.params.username, function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

router.post('/', function(req, res, next) {

});

module.exports = router;
