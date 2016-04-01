'use strict';

/**
 * @ngdoc directive
 * @name ubimoDemoApp.directive:advertiserForm
 * @description
 * # advertiserForm
 */
angular.module('ubimoDemoApp')
  .directive('advertiserForm', function () {
    return {
        templateUrl: 'scripts/directives/advertiser-form.html',
        restrict: 'E',
        controller : 'AdvertiserFormCtrl',
        scope: { advertiser: '=' }
    };
  });
