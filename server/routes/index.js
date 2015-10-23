var path = require('path');
var express = require('express');
var router = express.Router();
var User = require('../models/user');


// router.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../../client/index.html'));
// });



// *** edit route *** //
router.get('/edit', function(req, res,next) {
  console.log(req);
  res.send('you are reaching the backend Johnny Lamb');

});


module.exports = router;
