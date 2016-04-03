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

  function AdvertiserCtrl( $scope , advertisersService , $routeParams , notificationService , $location , $q ) {
    var advertiserId = $routeParams.advertiserId;

    // Check if advertiser id was passed to controller ( case edit exist advertiser )
    if(advertiserId){
        advertisersService.getAdvertiser(advertiserId).then(function (result) {
            $scope.advertiser = result;
            $scope.$emit('AddAdvertiserNav', {data: $scope.advertiser});
        }).catch(function(err){
            $location.path('/');
            notificationService.error("Advertiser Not Found");

        });
    // Case New Advertiser
    }else{
        $scope.advertiser = {};
    }


    // New Advertiser Buttons Group Used By Actions Bar Component
    $scope.newAdvertiserActionsBar = [
      {
        text : 'Save New Advertiser',
        class : 'success' ,
        callbackFunc :  saveNewAdvertiser ,
        isDisabled : true

      },
      {
        text : 'Cancel',
        class : 'danger' ,
        callbackFunc :  cancel
      }
    ];

    // Edit Advertiser Buttons Group Used By Actions Bar Component
    $scope.editAdvertiserActionsBar = [
      {
        text : 'Save',
        class : 'success' ,
        callbackFunc :  editAdvertiser ,
        isDisabled : true

      },
      {
        text : 'Save & Close',
        class : 'success' ,
        callbackFunc :  editAdvertiserAndClose ,
        isDisabled : true

      },
      {
        text : 'Cancel',
        class : 'danger' ,
        callbackFunc :  cancel
      }
    ];




    function saveNewAdvertiser() {
      advertisersService.addNewAdvertiser($scope.advertiser).then(function (result) {
        $location.path('/');
      });
    }

    function editAdvertiserAndClose() {
      editAdvertiser()
        .then(function(result){
          $location.path('/');
        });
    }

    function editAdvertiser() {
      var deferred = $q.defer();
      advertisersService.editAdvertiser($scope.advertiser)
        .then(function (result) {
              deferred.resolve(result);
          }
          , function (error) {
            deferred.reject(error);
          });
      return deferred.promise;
    }

    function cancel() {
      $location.path('/');
    }





  }


})();
