'use strict';

/**
 * @ngdoc overview
 * @name ubimoDemoApp
 * @description
 * # ubimoDemoApp
 *
 * Main module of the application.
 */
angular
    .module('ubimoDemoApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'jlareau.pnotify',
        'ui.grid',
        'ui.grid.saveState',
        'btford.markdown'

    ])
    .config(function ($routeProvider, notificationServiceProvider, $uibTooltipProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/advertisers.html',
                controller: 'AdvertisersCtrl',
                controllerAs: 'advertisersCtrl'
            })
            .when('/new', {
                templateUrl: 'views/new-advertiser.html',
                controller: 'AdvertiserCtrl',
                controllerAs: 'advertiserCtrl'
            })
            .when('/:advertiserId', {
                templateUrl: 'views/edit-advertiser.html',
                controller: 'AdvertiserCtrl',
                controllerAs: 'advertiserCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });


        notificationServiceProvider.setDefaults({
            history: false,
            delay: 4000,
            closer: true,
            closer_hover: true,
            hide: true
        });


        $uibTooltipProvider.options({
            popupDelay: 500,
            appendToBody: 'body'
        });


    });
