'use strict';

/**
 * @ngdoc service
 * @name ubimoDemoApp.advertisersService
 * @description
 * # advertisersService
 * Service in the ubimoDemoApp.
 */

angular.module('ubimoDemoApp')
  .service('advertisersService', function ( $http ) {
        var advertisersService = {
            getAdvertisers: function() {
                // $http returns a promise, which has a then function, which also returns a promise
                var promise = $http.get('http://localhost:3000/api/advertisers').then(function (response) {
                    // The then function here is an opportunity to modify the response
                    console.log(response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
                // Return the promise to the controller
                return promise;
            }
        };
        return advertisersService;
  });
