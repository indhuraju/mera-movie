'use strict';

module.exports = function($scope, $http) {
  // $scope.booking = 'booking';
$scope.book=false;

var refresh = function() {
$http.get('/movie/movie').success(function(response) {
console.log('READ IS SUCCESSFUL');
$scope.moviList = response;
$scope.mov = "";
});
};

refresh();

// $scope.bookingmovi = function(m){
//       console.log(m+ "booking is successfull");
//     };

$scope.myBook=function(){
  $scope.book=true;
}

// function myBook() {
//   $scope.book=true;
//     // var x = document.getElementById('myDIV');
//     // if (x.style.display === 'none') {
//     //     x.style.display = 'block';
//     // } else {
//     //     x.style.display = 'none';
//     // }
// }

function mySub() {
    alert("BOOKING IS SUCCESSFUL");
}



}
