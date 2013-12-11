'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    socket.on('send:saludos', function (data) {
      $scope.hola = data.hola;
    });
  }).
  controller('MyCtrl1', function ($scope, socket) {
    socket.on('send:saludos', function (data) {
      $scope.hola = data.hola;
    });
  })