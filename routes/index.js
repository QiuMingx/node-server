var express = require('express');
var router = express.Router();

var ctrls = require('../controllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/', ctrls.User.login);

// router.get('/user/userlist', ctrls.Until.checkToken, ctrls.User.userlist);
module.exports = router;
