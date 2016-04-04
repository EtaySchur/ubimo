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
    var advertiser = {
        _init : function(){
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
        }
    };

      advertiser._init();




    function saveNewAdvertiser() {
      advertisersService.addNewAdvertiser($scope.advertiser).then(function (result) {
        $location.path('/');
          notificationService.success("Create New Advertiser Success");
      }).catch(function(err){
          notificationService.error("Error Creating New Advertiser\n" + err.data);
      });
    }

    function editAdvertiserAndClose() {
      editAdvertiser()
        .then(function(result){
          $location.path('/');
        }).catch(function(err){

          });
    }

    function editAdvertiser() {
      var deferred = $q.defer();
      advertisersService.editAdvertiser($scope.advertiser)
        .then(function (result) {
              notificationService.success("Edit Advertiser Success");
              deferred.resolve(result);
          }).catch(function(err){
              console.log(err);
              notificationService.error("Edit Advertiser Fail\n"+ err.data);
              deferred.reject(err);
          });
      return deferred.promise;
    }

    function cancel() {
      $location.path('/');
    }
  }


})();
