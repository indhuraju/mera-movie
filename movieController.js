
'use strict';

module.exports = function($scope, $http, $log, $rootScope) {
  $scope.m = $rootScope.bookedMovie;
    console.log($scope.m);

//     var refresh = function () {
//           $http.get('/map/map').success(function (response) {
//               console.log('READ IS SUCCESSFUL');
//               $scope.mppslist = response;
//               $scope.mpps = "";
//           });
//       };
// refresh();

var refreshmps = function () {
      $http.get('/map/map').success(function (response) {
          console.log('READ THEATRE SUCCESSFUL');
          $scope.mapplist = response;
          $scope.mapp = "";
      });
  };

  refreshmps();

  var refreshbk = function () {
        $http.get('/b/b').success(function (response) {
            console.log('READ THEATRE SUCCESSFUL');
            $scope.booklist = response;
            $scope.book = "";
        });
    };

    refreshbk();

 var refreshThrr = function () {
           $http.get('/t/t').success(function (response) {
               console.log('READ THEATRE SUCCESSFUL');
               $scope.thtrslist = response;
               $scope.thtrs = "";
           });
       };

       refreshThrr();

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

           $scope.rows2 = ['M', 'N', 'O', 'P', 'Q', 'R'];
               $scope.cols2 = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ];

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
       }

   };
