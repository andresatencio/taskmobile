'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',

  // 3rd party dependencies
  'myApp.socket-io'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/',
      controller: 'MyCtrl1'
    })

  $locationProvider.html5Mode(true);
});
