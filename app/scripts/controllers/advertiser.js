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

    advertisersService.getAdvertiser(advertiserId).then(function (result) {
      // TODO - CHECK FOR ERROR
      $scope.advertiser = result;

    });

    //$scope.saveNewAdvertiser = function(advertiser){
    //  advertisersService.addNewAdvertiser(advertiser);
    //};

    $scope.editAdvertiser = function(advertiser){

    };

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
