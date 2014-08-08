'use strict';

/**
 * @ngdoc function
 * @name escaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the escaApp
 */
angular.module('escaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
