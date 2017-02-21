var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var confirmSchema = mongoose.Schema({
  // UserName:String,
  movieTitle:String,
  CityName:String,
  TheatreName:String,
  Reservation:String,
  Showtime:String,
    Amount:String,
    NoofTickets:String,
   seatnumbers:Array,
   eMail:String
 });
var Confirm = mongoose.model('Confirm',confirmSchema, 'confirmTable');


router.get('/con', function (req, res) {
    console.log("REACHED GET FUNCTION ON Booking SERVER");
    Book.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/con/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON booking SERVER");
     Book.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/con', function(req, res){
  console.log(req.body);
  // var cnuser = req.body.UserName;
 var cnMovie = req.body.movieTitle;
  var cnCity= req.body.CityName;
  var cntheater = req.body.TheatreName;
 var cnres = req.body.Reservation;
  var cnShow = req.body.Showtime;
  var cnAmnt = req.body.Amount;
  var cnNumbers = req.body.NoofTickets;
  var cnSeat = req.body.seatnumbers;
  var cnmail= req.body.eMail;


var bok1 = new Bok({
  // UserName: cnuser,
  movieTitle: cnMovie,
  CityName: cnCity,
  TheatreName: cntheater,
  Reservation: cnres,
  Showtime: cnShow,
  Amount: cnAmnt,
  NoofTickets:cnNumbers,
  seatnumbers: cnSeat,
  eMail: cnmail
});

  bok1.save(function(err, docs){
    if ( err ) throw err;
    console.log("booking Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/con/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Bok.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/con/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  Bok.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
