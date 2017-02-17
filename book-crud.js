var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var bookSchema = mongoose.Schema({
  BookID: String,
  MovieName: String,
  CityName: String,
  TheatreName: String,
  Showtime: String,
  Reservation : String,
  seatnumbers: Array,
   Amount: String

 });
var Book = mongoose.model('Book',bookSchema, 'booktable');


router.get('/b', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Book.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/b/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Book.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/b', function(req, res){
  console.log(req.body);
  // var id = req.body.BookID;
  var name = req.body.MovieName;
  var ct = req.body.CityName;
  var thrt = req.body.TheatreName;
  var Sho = req.body.Showtime;
  var res = req.body.Reservation;
  var stno = req.body.seatnumbers;
  var amt = req.body.Amount
var book1 = new Book({
    // BookID : id,
    MovieName : name,
    CityName : ct,
    TheatreName : thrt,
    Showtime : sho,
    Reservation : res,
    seatnumbers: stno,
    Amount : amt
});

  book1.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/b/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Book.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/b/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  Book.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
