'use strict';

/**
 * @ngdoc function
 * @name ubimoDemoApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the ubimoDemoApp
 */
(function(){
    angular.module('ubimoDemoApp')
        .controller('NavbarCtrl', NavBarCtrl);

        function NavBarCtrl($scope , $location){
            $scope.lastAdvertisersMaxItems = 3;
            $scope.lastAdvertisers = [];
            $scope.$on('AddAdvertiserNav', function(ev, args){
                var advertiser = args.data;

                if( checkForDuplicates(advertiser , $scope.lastAdvertisers)){
                    $scope.lastAdvertisers.push(advertiser);
                    if($scope.lastAdvertisers.length > $scope.lastAdvertisersMaxItems){
                        $scope.lastAdvertisers.shift();
                    }
                }

            });

            function checkForDuplicates( advertiser , lastAdvertisers){
                console.log(lastAdvertisers);
                for(var i = 0 ; i < lastAdvertisers.length ; i++){
                    if(lastAdvertisers[i].id === advertiser.id){
                        return false;
                    }
                }
                return true;
            }
        }
})();

