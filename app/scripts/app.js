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
    'jlareau.pnotify'
  ])
  .config(function ($routeProvider , notificationServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/advertisers.html',
        controller: 'AdvertisersCtrl',
        controllerAs: 'main'
      })
      .when('/new', {
        templateUrl: 'views/new-advertiser.html',
        controller: 'AdvertiserCtrl',
        controllerAs: 'about'
      })
        .when('/:advertiserId', {
            templateUrl: 'views/edit-advertiser.html',
            controller: 'AdvertiserCtrl',
            controllerAs: 'about'
        })
      .otherwise({
        redirectTo: '/'
      });


        notificationServiceProvider.setDefaults({
            history: false,
            delay: 4000,
            closer: true,
            closer_hover: true ,
            hide: true
        });


    });
