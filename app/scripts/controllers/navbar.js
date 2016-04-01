'use strict';

/**
 * @ngdoc function
 * @name ubimoDemoApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the ubimoDemoApp
 */
angular.module('ubimoDemoApp')
  .controller('NavbarCtrl', function ($scope , $location) {
       $scope.isActive= function ( route ){
            return route === this.$location.path();
        }
  });
