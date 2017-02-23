var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST

router.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');


var confirmSchema = mongoose.Schema({
    CTitle: String,
    CCityName: String,
    CTheatreName: String,
     CShowtime: String,
     CReservation: String,
    //  NoofTickets:String,
    Cseatnumbers: String,
    CAmount: String,
    Cemail: String

});
var Confirm = mongoose.model('Confirm', confirmSchema, 'confirmtable');

router.get('/con', function (req, res,next) {
    console.log("REACHED GET FUNCTION ON SERVER");

    Confirm.find({}, function (err, docs) {
         res.json(docs);
         console.log(docs);

    });
});

router.get('/con/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Confirm.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/con', function(req, res){

  console.log(req.body);

    var name = req.body.CTitle;
    var cname=req.body.CCityName;
    var tloc = req.body.CTheatreName;
    var stime = req.body.CShowtime;
    var dat = req.body.CReservation;
    // var tk = req.body.NoofTickets;
    var cn=req.body.Cseatnumbers;
    var amt=req.body.CAmount;
    var cml= req.body.Cemail;

    // var rs=req.body.res;
   var Confirm1 = new Conf({

    CTitle : name,
    CCityName:cname,
   CTheatreName:tloc,
    CShowtime:stime,
    CReservation:dat,
    // NoofTickets:tk,
    Cseatnumbers:cn,
    CAmount:amt,
    Cemail: cml
  });

  Confirm1.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/bk/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      conf.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/bk/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    conf.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
module.exports = router;
