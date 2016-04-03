'use strict';

/**
 * @ngdoc directive
 * @name ubimoDemoApp.directive:navbar
 * @description
 * # navbar
 */
(function(){
    angular.module('ubimoDemoApp')
        .directive('navbar', function () {
            return {
                templateUrl: 'scripts/directives/navbar/navbar.html',
                restrict: 'E',
                controller : 'NavbarCtrl'

            };
        });
})();

