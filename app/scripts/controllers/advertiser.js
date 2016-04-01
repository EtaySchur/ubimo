'use strict';

/**
 * @ngdoc function
 * @name ubimoDemoApp.controller:AdvertiserCtrl
 * @description
 * # AdvertiserCtrl
 * Controller of the ubimoDemoApp
 */
angular.module('ubimoDemoApp')
  .controller('AdvertiserCtrl', function ( $scope , advertisersService , $routeParams ) {
        var advertiserId = $routeParams.advertiserId;
        advertisersService.getAdvertiser(advertiserId).then(function(result) {
            // TODO - CHECK FOR ERROR
            $scope.advertiser = result;
        });
  });
