'use strict';

/**
 * @ngdoc service
 * @name ubimoDemoApp.advertisersService
 * @description
 * # advertisersService
 * Service in the ubimoDemoApp.
 */

(function(){
    angular.module('ubimoDemoApp')
        .service('advertisersService', function ( $http , ubimoApi ) {
            var promise = null, advertisersService;
            advertisersService = {
                getAdvertisers: function() {
                    // $http returns a promise, which has a then function, which also returns a promise
                    promise = $http.get(ubimoApi.ADVERTISERS).then(function (response) {
                        // The then function here is an opportunity to modify the response
                        // The return value gets picked up by the then in the controller.
                        return response.data;
                    });
                    // Return the promise to the controller
                    return promise;
                },
                getAdvertiser : function(advertiserId){
                    promise = $http.get(ubimoApi.ADVERTISER + advertiserId).then(function (response) {
                        return response.data;
                    });
                    // Return the promise to the controller
                    return promise;


                },
                addNewAdvertiser : function( advertiser){
                    promise = $http.post(ubimoApi.ADVERTISER , advertiser).then(function (response) {
                        return response.data;
                    });
                    // Return the promise to the controller
                    return promise;
                },
                editAdvertiser : function ( advertiser){
                    promise = $http.put(ubimoApi.ADVERTISER + advertiser.id , advertiser).then(function (response) {
                        // The then function here is an opportunity to modify the response
                        // The return value gets picked up by the then in the controller.
                        return response.data;
                    });
                    // Return the promise to the controller
                    return promise;
                }
            };
            return advertisersService;
        });
})();

