'use strict';

/**
 * @ngdoc service
 * @name ubimoDemoApp.ubimoApi
 * @description
 * # ubimoApi
 * Constant in the ubimoDemoApp.
 */
(function(){
    angular.module('ubimoDemoApp')
        .constant('ubimoApi', {
            'ADVERTISERS' : 'http://localhost:3000/api/advertisers',
            'ADVERTISER' : 'http://localhost:3000/api/advertiser/'
        });

})();
