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

  .factory('httpGETTER', function($http){
    return {
      getInfo: function(tourId, callback){
        return $http({
          method: 'GET',
          url: '/api/tours/' + tourId
          }).success(function(data){
            callback(data);
          });
      }
    }
  })

  .controller('ShowtourCtrl', function ($scope, GoExplore, httpGETTER, $location) {

    $scope.glhf = GoExplore.glhf;

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

  });
