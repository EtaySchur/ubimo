'use strict';

/**
 * @ngdoc directive
 * @name ubimoDemoApp.directive:actionsBar
 * @description
 * # actionsBar
 */
angular.module('ubimoDemoApp')
  .directive('actionsBar', function () {
    return {
      templateUrl: 'scripts/directives/actions-bar/actions-bar.html',
      restrict: 'E',
      scope : {
        btnOptions : '=',
        optionalButtonsControlForm : '=?'
      },
      controller : [ '$scope' , ActionsBarCtrl],
      link: postLink
    };

    function postLink(scope, element, attrs) {

    }

    function ActionsBarCtrl ($scope){
      $scope.fireCallbackFunction = function( button ){
        button.callbackFunc();
      }
    }

  });
