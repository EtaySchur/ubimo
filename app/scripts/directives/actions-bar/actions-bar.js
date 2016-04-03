'use strict';

/**
 * @ngdoc directive
 * @name ubimoDemoApp.directive:actionsBar
 * @description
 * # actionsBar
 */
(function(){
    angular.module('ubimoDemoApp')
        .directive('actionsBar', function () {
            return {
                templateUrl: 'scripts/directives/actions-bar/actions-bar.html',
                restrict: 'E',
                scope : {
                    btnOptions : '=',
                    optionalButtonsControlForm : '=?'
                },
                controller : [ '$scope' , ActionsBarCtrl]
            };

            function ActionsBarCtrl ($scope){
                $scope.fireCallbackFunction = function( button ){
                    button.callbackFunc();
                }
            }

        });
})();

