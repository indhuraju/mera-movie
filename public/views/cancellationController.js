
'use strict';

module.exports = function($scope, $http,$log) {


  var refreshsw = function () {
        $http.get('/sh/sh').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.showtimelist = response;
            $scope.showtime = "";
        });
    };

    refreshsw();

    $scope.addShow = function () {
        console.log($scope.showtime);
        $http.post('/sh/sh', $scope.showtime).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refreshsw();
        });
    };

    $scope.removeShow = function (id) {
        console.log(id);
        $http.delete('/sh/sh/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refreshsw();
        });
    };

    $scope.editShow = function (id) {
         $http.get('/sh/sh/' + id._id).success(function (response) {
            $scope.showtime = response[0];
        });
    };

    $scope.updateShow = function () {
        console.log("REACHED UPDATE");
        console.log($scope.showtime._id);
        $http.put('/sh/sh/' + $scope.showtime._id, $scope.showtime).success(function (response) {
            console.log(response);
            refreshsw();
        })
    }
    // 'use strict';
    //
    // module.exports = function($scope, $http) {
    //   console.log("ctrller is working");
    //
    //
    //   $(function(){
    //   $('a[title]').tooltip();
    //   });
    // };

    // 'use strict';
    //
    // module.exports = function($scope, $http) {
    //

      var refreshci = function () {
            $http.get('/c/c').success(function (response) {
                $scope.citieslist = response;
                console.log('READ IS SUCCESSFUL');
                $scope.cities = "";
            });
        };

        refreshci();

        $scope.addCity = function () {
            console.log($scope.cities);
            $http.post('/c/c', $scope.cities).success(function (response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                refreshci();
            });
        };

        $scope.removeCity = function (id) {
            console.log(id);
            $http.delete('/c/c/' + id._id).success(function (response) {
                console.log(response);
                console.log('DELETED SUCCESSFULLY');
                refreshci();
            });
        };

        $scope.editCity = function (id) {
             $http.get('/c/c/' + id._id).success(function (response) {
                $scope.cities = response[0];
            });
        };

        $scope.updateCity = function () {
            console.log("REACHED UPDATE");
            console.log($scope.cities._id);
            $http.put('/c/c/' + $scope.cities._id, $scope.cities).success(function (response) {
                console.log(response);
                refreshci();
            })
        }


    var refreshts = function () {
          $http.get('/t/t').success(function (response) {
              console.log('READ THEATRE SUCCESSFUL');
              $scope.thtrslist = response;
              $scope.thtrs = "";
          });
      };

      refreshts();

      $scope.addTr = function () {
          console.log($scope.thtrs);
          $http.post('/t/t', $scope.thtrs).success(function (response) {
              console.log(response);
              console.log("CREATE THEATRE SUCCESSFUL");
              refreshts();
          });
      };

      $scope.removeTr = function (id) {
          console.log(id);
          $http.delete('/t/t/' + id._id).success(function (response) {
              console.log(response);
              console.log('DELETED THEATRE SUCCESSFULLY');
              refreshts();
          });
      };

      $scope.editTr = function (id) {
           $http.get('/t/t/' + id._id).success(function (response) {
              $scope.thtrs = response[0];
          });
      };

      $scope.updateTr = function () {
          console.log("REACHED THEATRE UPDATE");
          console.log($scope.thtrs._id);
          $http.put('/t/t/' + $scope.thtrs._id, $scope.thtrs).success(function (response) {
              console.log(response);
              refreshts();
          })
      }


        $scope.removem = function (id) {
            console.log(id);
            $http.delete('/movie/movie/' + id._id).success(function (response) {
                console.log(response);
                console.log('DELETED MOVIE SUCCESSFULLY');
                refreshmv();
            });
        };

        $scope.editm = function (id) {
             $http.get('/movie/movie/' + id._id).success(function (response) {
                $scope.mov= response[0];
            });
        };

        $scope.updatem = function () {
            console.log("REACHED MOVIE UPDATE");
            console.log($scope.mov._id);
            $http.put('/movie/movie/' + $scope.mov._id, $scope.mov).success(function (response) {
                console.log(response);
                refreshm();
            })
        }
        var refresh = function() {
    $http.get('/movie/movie').success(function(response) {
        console.log('READ IS SUCCESSFUL');
        $scope.moviList = response;
        $scope.mov = "";
    });
};

refresh();

$scope.addm = function(mov) {
    $http.get(`http://www.omdbapi.com/?t=${mov.movieTitle}&plot=short&r=json`).success(function(response) {
        //console.log(response);
        var movieObj = {};
        for (var key in response) {
            if (key == 'Title' || key == 'Year' || key == 'Language' || key == 'Poster' || key == 'Genre' || key == 'Director' || key == 'Actors' ) {
                movieObj[key] = response[key];

            }
        }


        $http({
                method: 'POST',
                url: '/movie/movie',
                 headers: {'Content-Type': 'application/json'},
                data: movieObj
            })
            .then(function(response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                $log.info(response);
                refresh();
            });




    });
    console.log($scope.movi);

};

};
