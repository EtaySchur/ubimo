'use strict';
/**
 * @ngdoc function
 * @name ubimoDemoApp.controller:AdvertisersCtrl
 * @description
 * # AdvertisersCtrl
 * Controller of the ubimoDemoApp
 */

(function () {
    angular.module('ubimoDemoApp')
        .controller('AdvertisersCtrl', AdvertisersCtrl);

    function AdvertisersCtrl($scope, advertisersService, gridTemplates , $location , notificationService) {
        var advertisers = {
            _init: function () {
                $scope.advertisers = [];
                $scope.gridOptions = {
                    enableFilter: false,
                    data: 'advertisers',
                    rowHeight: 50,
                    enableHorizontalScrollbar: 0,
                    enableVerticalScrollbar: 1,
                    enableFiltering: false,
                    enableColumnMenus: false,
                    enableRowSelection: false,
                    enableRowHeaderSelection: false,
                    multiSelect: true,
                    modifierKeysToMultiSelect: true,
                    enableSelectAll: false,
                    noUnselect: false,
                    onRegisterApi: function (gridApi) {
                        $scope.gridApi = gridApi;
                    }
                };

                //
                $scope.advertiserListActionsBar = [
                    {
                        text: 'Add New Advertiser',
                        class: 'success',
                        callbackFunc: navToAddAdvertiser
                    }
                ];

                $scope.gridOptions.columnDefs = gridTemplates.getAdvertiserColumnTemplate();
                advertisersService.getAdvertisers().then(function (result) {
                    $scope.advertisers = result;
                }).catch(function(err){
                    notificationService.error("Error Getting Advertisers List \n" + err.data);
                });


                function navToAddAdvertiser() {
                    $location.path('/new');
                }
            }
        };

        advertisers._init();


    }

})();

