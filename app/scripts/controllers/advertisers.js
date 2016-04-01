'use strict';

/**
 * @ngdoc function
 * @name ubimoDemoApp.controller:AdvertisersCtrl
 * @description
 * # AdvertisersCtrl
 * Controller of the ubimoDemoApp
 */
angular.module('ubimoDemoApp')
  .controller('AdvertisersCtrl', function (  $scope , advertisersService ) {
        advertisersService.getAdvertisers().then(function(result) {
            // TODO - CHECK FOR ERROR
            $scope.advertisers = result;
        });
  });
