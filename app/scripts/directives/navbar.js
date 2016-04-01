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
      controller : 'NavbarCtrl',
      link: function postLink(scope, element, attrs) {
        element.text('this is the navbar directive');
      }
    };
  });
