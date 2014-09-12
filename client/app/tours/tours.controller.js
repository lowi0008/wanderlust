'use strict';

angular.module('wanderlustApp')

  .directive('starRating', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-star"></span>'
    };
  })

  .directive('tagPrice', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-usd"></span>'
    };
  })

  .directive('tagCamera', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-camera"></span>'
    };
  })

  .directive('tagTree', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-tree-conifer"></span>'
    };
  })

  .factory('httpGET', function($http){
    
    return {
      getData: function(callback){
        return $http({
          method: 'GET',
          url: '/api/tours'
          }).success(function(data){
            callback(data);
          });
        },

      // getUserData: function(callback) {
      //   return $http({
      //     method: 'GET',
      //     url: '/api/user',
      //   })
      //   .success(function(data){
      //     console.log('data: ', data);
      //     // console.log(data._id) // theoretically should be the current logged in user's userID
      //     // callback(data);
      //     userTours = data.userTours;
      //     callback(data);
      //   })
      //   .catch(function(error) {
      //     console.log('ERROR: ', error);
      //   })
      // },
    }
  })

  .controller('ToursCtrl', function ($scope, $state, $location, $http, httpGET, User) {
    
    $scope.user = {};

    User.get()['$promise']
    .then(function(data) {
      $scope.user.id = data._id;
      $scope.user.tours = data.userTours;
      console.log('ballz');

    });

    httpGET.getData(function(data){
      console.log(data);
      $scope.tours = data;
      console.log($scope.tours);
    });
    

    

    //route to tour on click
    $scope.selectedTour = function(tourId){
      console.log('tourId: ', tourId);
      console.log('user.tours: ', $scope.user.tours);
      for (var i = 0; i < $scope.user.tours.length; i++) {
        if(tourId === '5412383c411ff9aa0125524e') {
          $location.path('tours/showtour/active').search({tour: tourId});
          return;
        }
      }
      $location.path('tours/showtour/unselected').search( {tour: tourId});
    }
  });
