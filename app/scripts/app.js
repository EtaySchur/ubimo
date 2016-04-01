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
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
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
  });
