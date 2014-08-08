'use strict';

/**
 * @ngdoc function
 * @name escaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the escaApp
 */
angular.module('escaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
