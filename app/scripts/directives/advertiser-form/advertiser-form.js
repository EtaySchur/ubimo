'use strict';

/**
 * @ngdoc directive
 * @name ubimoDemoApp.directive:advertiserForm
 * @description
 * # advertiserForm
 */
(function(){
  angular.module('ubimoDemoApp')
    .directive('advertiserForm', function () {
      return {
        templateUrl: 'scripts/directives/advertiser-form/advertiser-form.html',
        restrict: 'E',
        controller: ['$scope', AdvertiserFormCtrl],
        scope: {
          advertiser: '='
        }
      };
    });

  var $scope;

  function AdvertiserFormCtrl(scope) {
    $scope = scope;
  }

})();





