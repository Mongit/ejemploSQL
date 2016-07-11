var express = require('express');
var router = express.Router();
var db = require('./../database/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sql', function(req, res, next) {
  db.query('SELECT * FROM books;',function(err,rows){
    if(err)
      console.log(err);
    console.log('Data received from Db:\n');
    console.log(rows);
  });
  res.render('index', { title: 'MySQL' });
});
/*
router.get('/sql', function(req, res, next) {
  db.query(('INSERT INTO books SET ?', book, function(err,res){
    if(err)
    console.log(err);
    console.log('Last insert ID:', res.insertId);
  }));
  //res.render('index', { title: 'Express' });
});
*/
module.exports = router;
