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
        var lastAdvertisersMaxItems = 3;
        $scope.lastAdvertisers = [];
        $scope.$on('AddAdvertiserNav', function(ev, args){
            var advertiser = args.data;
            if( $scope.lastAdvertisers.indexOf(advertiser) === -1){
                $scope.lastAdvertisers.push(advertiser);
                if($scope.lastAdvertisers.length > lastAdvertisersMaxItems){
                    $scope.lastAdvertisers.shift();
                }
            }

        });

  });
