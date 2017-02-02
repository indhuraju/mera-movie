'use strict';

module.exports = function($scope, $http) {
  $scope.booking = 'booking';

  // var refresh = function () {
  //       $http.get('/movie/movie').success(function (response) {
  //           console.log('READ IS SUCCESSFUL');
  //           $scope.contactlist = response;
  //           $scope.contact = "";
  //       });
  //   };
  //
  //   refresh();

  var movieObj={};
  $scope.getData = function(){
    console.log('Hi Welcome');
     $http.get('http://www.omdbapi.com/?t='+$scope.movieObj.Title+'&y='+$scope.movieObj.Year+'&plot=short&r=json').success(function (response){
          console.log(response);
   for(var key in response)
   {
     if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors')
        {
        movieObj[key] = response[key];

      }
console.log(movieObj);
    }
});
    }
  var refresh = function () {
          $http.get('/movie/movie').success(function (response) {
              console.log('READ IS SUCCESSFUL');
              $scope.movieObj = response;
              $scope.Data = "";
          });
      };

      refresh();

      $scope.addData = function () {
          // console.log($scope.movieObj);
          $http.post('/movie/movie', movieObj).success(function (response) {
              console.log(response);
              console.log("MOVIE ADD  SUCCESSFUL");
              refresh();
          });
      };

};
    // $http{{
    //   method:'post',
    //   url:'movie/addmovie',
    //   header:{'content-type':'application/json'},
    //   data: movieObj
    // }}
    //  .then{function(response){
    //    console.log(response);
    //    console.log("CREATE IS SUCCESSFULL");
    //    refresh();
    //  }}

//     $scope.addMovie = function () {
//         console.log($scope.contact);
//         $http.post('/movie/movie', $scope.contact).success(function (response) {
//             console.log(response);
//             console.log("CREATE IS SUCCESSFUL");
//             refresh();
//         });
//     };
//
//     $scope.removeMovie = function (id) {
//         console.log(id);
//         $http.delete('/movie/movie/' + id._id).success(function (response) {
//             console.log(response);
//             console.log('DELETED SUCCESSFULLY');
//             refresh();
//         });
//     };
//
//     $scope.editMovie = function (id) {
//          $http.get('/movie/movie/' + id._id).success(function (response) {
//             $scope.contact = response[0];
//         });
//     };
//
//     $scope.updateMovie = function () {
//         console.log("REACHED UPDATE");
//         console.log($scope.contact._id);
//         $http.put('/movie/movie/' + $scope.contact._id, $scope.contact).success(function (response) {
//             console.log(response);
//             refresh();
//         })
//     }
// };
