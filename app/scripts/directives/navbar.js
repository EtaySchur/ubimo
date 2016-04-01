'use strict';

/**
 * @ngdoc directive
 * @name ubimoDemoApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('ubimoDemoApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'scripts/directives/navbar.html',
      restrict: 'E',
      controller : 'NavbarCtrl'

    };
  });
