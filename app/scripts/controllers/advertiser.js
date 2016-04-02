'use strict';
(function(){
  /**
   * @ngdoc function
   * @name ubimoDemoApp.controller:AdvertiserCtrl
   * @description
   * # AdvertiserCtrl
   * Controller of the ubimoDemoApp
   */
  angular.module('ubimoDemoApp')
    .controller('AdvertiserCtrl', AdvertiserCtrl);

  function AdvertiserCtrl( $scope , advertisersService , $routeParams , notificationService ) {
    var advertiserId = $routeParams.advertiserId;
    advertisersService.getAdvertiser(advertiserId).then(function (result) {
      // TODO - CHECK FOR ERROR
      $scope.advertiser = result;
    });
  }


})();
