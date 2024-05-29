var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/saludo', function(req, res, next) {
  res.json({saludo:"Hola Mundo"});
});

module.exports = router;
