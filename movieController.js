var selected=[];
  var reserved=[];
'use strict';

module.exports = function($scope, $http, $log, $rootScope) {
  $scope.m = $rootScope.bookedMovie;
    console.log($scope.m);


 var refreshmps = function () {
       $http.get('/map/map').success(function (response) {
           console.log('READ IS SUCCESSFUL');
           $scope.mappinglist = response;
           $scope.mapping = "";
       });
   };

   refreshmps();


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
                       return selected;
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
