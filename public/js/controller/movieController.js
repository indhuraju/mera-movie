'use strict';

module.exports = function($scope, $http, $log, $rootScope,$location) {
  $scope.m = $rootScope.bookedMovie;

var date;
var details=[];
$scope.seat=false;
var i;
$rootScope.seatArrange=[];
console.log($scope.m);


var refreshCity = function () {
      $http.get('/c/c').success(function (response) {
          $scope.citieslist = response;
          console.log('READ IS SUCCESSFUL');
          $scope.cities = "";
      });
  };

  refreshCity();




       var refreshShow = function () {
             $http.get('/sh/sh').success(function (response) {
                 console.log('READ IS SUCCESSFUL');
                 $scope.showtimelist = response;
                 $scope.showtime = "";
             });
         };

         refreshShow();





   var selected=[];
     var reserved=[];


   $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F'];
       $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ];

       $scope.rows1 = ['G', 'H', 'I', 'J', 'K', 'L'];
           $scope.cols1 = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ];


       $scope.getStatus = function(seatPos) {
         if(reserved.indexOf(seatPos) > -1) {
                       return 'reserved';
                   } else if(selected.indexOf(seatPos) > -1) {
                       return 'selected';
                   }

               }
       $scope.seatClicked=function(seatPos){
         var index = selected.indexOf(seatPos);
          if(index != -1) {
              // seat already selected, remove
              selected.splice(index, 1)
          } else {
              // new seat, push
              selected.push(seatPos);
              console.log(selected);
            }
             document.getElementById("seating").innerHTML=selected;
       // seatClick();
       $scope.NumberOfSeats=selected.length;

       }
// };
// $scope.d=function(){
//
// }
//
// $scope.add = function()
// {
//
// console.log($scope.book.CityName);
// $scope.book.MovieName=$scope.m.moviTitle;
// console.log($scope.book.TheatreName);
// console.log($scope.book.Showtime);
// console.log($scope.book.seatnumbers);
//
// try
//  {
// for(i=0;i<=$scope.confirmlist.length;i++)
// {
//   if($scope.confirmlist.length==0)
//   {
//     scope.seat = true;
//   }
//   else{
//     console.log($scope.confirmlist[i].conTitle);
//     console.log($scope.confirmlist[i].conCityName);
//     console.log($scope.confirmlist[i].conTheatreName);
//     console.log($scope.confirmlist[i].conReservation);
//     console.log($scope.confirmlist[i].conShowtime);
//
//     if ($scope.confirmlist[i].conTitle==$scope.book.MovieName && $scope.confirmlist[i].conCityName==$scope.book.CityName  && $scope.confirmlist[i].conTheatreName==$scope.book.TheatreName  && $scope.confirmlist[i].conReservation==$scope.book.Reservation && $scope.confirmlist[i].conShowtime==$scope.book.Showtime)
// {
//      $scope.seat = true;
//            console.log($scope.confirmlist[i].conTitle);
//             console.log($scope.confirmlist[i].conCityName);
//           console.log($scope.confirmlist[i].conTheatreName);
//           console.log($scope.confirmlist[i].conReservation);
//           console.log($scope.confirmlist[i].conShowtime);
//
//         // reserved.push($scope.confirmlist[i].cnseatnumbers);
//         // selected.push($scope.confirmlist[i].cnseatnumbers);
//
//         reserved=$scope.confirmlist[i].conseatnumbers;
//       console.log(reserved);
//
//     }
//      else
//      {
//         $scope.seat = true;
//      }
//    }
//      }
//
//   }
//
//
//  catch (e) {}
//
//       //  function addbook() {
//       //      alert("BOOKING IS SUCCESSFUL");
//       //  }
//
// };
      var refreshbok = function () {
            $http.get('/bk/bk').success(function (response) {
                console.log('READ bking SUCCESSFUL');
                $scope.booklist = response;
                $scope.book = "";
            });
        };

        refreshbok();

        var refreshConfirm = function () {

            $http.get('/con/con').success(function (response) {
                console.log('Confirm READ IS SUCCESSFUL');
                $scope.confirmlist = response;
                $scope.confirm = "";
        });
        };

        refreshConfirm();



        $scope.addbook = function () {
          date=document.getElementById("datebook").value;
          console.log(date);
          $scope.book.Reservation=date;
            $scope.book.MovieName=$scope.m.movieTitle;
            $scope.book.seatnumbers=selected;
            console.log($scope.book);
            $http.post('/bk/bk', $scope.book).success(function (response) {
                console.log(response);
                console.log(" BOOKING IS SUCCESSFUL");
                console.log($scope.book);
              $rootScope.confirmpage= $scope.book;
                $location.path('/confirm');
                refreshbok();
            });
        };


        // $scope.addconf = function () {
        //
        //         };

        // $scope.addconf = function (booking) {
        // $rootScope.confirmpage= $scope.booking;
        // $location.path('/confirm');
        //         };


     var refreshThrr = function () {
               $http.get('/t/t').success(function (response) {
                   console.log('READ THEATRE SUCCESSFUL');
                   $scope.thtrslist = response;
                   $scope.thtrs = "";
               });
           };

           refreshThrr();


    var uniqueNames=[];
    var uniqueObj =[];
    var refreshmps = function () {
          $http.get('/map/map').success(function (response) {
              console.log('READ THEATRE SUCCESSFUL');
              $scope.mapplist = response;
              $scope.mapp = "";
      //     });
      // };

    for(i=0; i<$scope.mapplist.length;i++)
    {
      // if($scope.mapplist[i].Title==$scope.m.moviTitle)

        if(uniqueNames.indexOf($scope.mapplist[i].City) === -1){
                   uniqueObj.push($scope.mapplist[i]);
               uniqueNames.push($scope.mapplist[i].City);
             }
           }

           console.log(uniqueNames);
           console.log($scope.cityMovie);
    });
    };

// };


    $scope.cityMovie=uniqueNames;


      refreshmps();


   };
