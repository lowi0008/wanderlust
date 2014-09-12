'use strict';

angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('showtour', {
        url: '/tours/showtour',
        abstract: true,
        templateUrl: 'app/tours/showtour/showtour.html',
        controller: 'ShowtourCtrl'
      })
      .state('showtour.unselected', {
        url: '/unselected',
        templateUrl: 'app/tours/showtour/showtour.unselected.html'
      })
      .state('showtour.active', {
        url: '/active',
        templateUrl: 'app/tours/showtour/showtour.active.html'
      });
  });
