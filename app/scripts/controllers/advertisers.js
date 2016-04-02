
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

  function AdvertisersCtrl( $scope , advertisersService, gridTemplates ) {
    var advertisers = {
      _init: function(){
        $scope.advertisers = [];
        $scope.gridOptions = {
          enableFilter : false ,
          data: 'advertisers',
          rowHeight: 50 ,
          enableHorizontalScrollbar: 1,
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
        $scope.gridOptions.columnDefs = gridTemplates.getAdvertiserColumnTemplate();
        advertisersService.getAdvertisers().then(function(result) {
          // TODO - CHECK FOR ERROR
          $scope.advertisers = result;

        });
      }
    };

    advertisers._init();



  }

})();

