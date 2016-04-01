'use strict';

/**
 * @ngdoc function
 * @name ubimoDemoApp.controller:AdvertiserCtrl
 * @description
 * # AdvertiserCtrl
 * Controller of the ubimoDemoApp
 */
angular.module('ubimoDemoApp')
  .controller('AdvertiserCtrl', function ( $scope , advertisersService ) {
        advertisersService.getAdvertisers().then(function(result) {
            // TODO - CHECK FOR ERROR
            $scope.advertisers = result;
        });
  });
