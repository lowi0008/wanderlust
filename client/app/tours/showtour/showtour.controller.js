'use strict';

angular.module('wanderlustApp')
  
  .factory('GoExplore', function(){
    //this function activates on ng-click for the button "Go Exploring!"
    return {
      glhf: function(){
        alert('good luck, have fun!');
      }
    };
  })

  .factory('httpGETTER', function($http, User){
    return {
      getInfo: function(tourId, callback){
        return $http({
          method: 'GET',
          url: '/api/tours/' + tourId
          }).success(function(data){
            console.log('data: ', data);
            callback(data);
          });
      },

      updateTours: function(data) {

      }
    }
  })
  

  .controller('ShowtourCtrl', function ($scope, GoExplore, httpGETTER, $location, User) {

    $scope.glhf = GoExplore.glhf;

    // $scope.user = {};

    User.get()['$promise']
    .then(function(data) {
      console.log('userTours: ', data.userTours);
      for (var i = 0; i < data.userTours.length; i++) {
        console.log(data.userTours[i].tourId);
        console.log($location.search().tour);
        if(data.userTours[i].tourId === $location.search().tour) {
          console.log('in the cock block');
          $scope.user = {
            spots: data.userTours[i]
          };
        }
      }

    console.log('spots: ', $scope.user.spots);
    });

    httpGETTER.getInfo($location.search().tour, function(data){
      console.log('After Get 33', data);
      $scope.tours = {
        name: data.title,
        author: 'fill in',
        length: 'fill in',
        description: data.description,
        spots: data.spots,
        reviews: data.reviews
      };
    });

    console.log($scope.tours);

    $scope.updateTours = function(data) {

    };

  });
