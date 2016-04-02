'use strict';

/**
 * @ngdoc service
 * @name ubimoDemoApp.gridTemplates
 * @description
 * # gridTemplates
 * Service in the ubimoDemoApp.
 */
(function () {
//------------------------------------------------------------------------------------------------------------------//
//-------------------------------------Angular Stuff----------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------//
  angular.module('ubimoDemoApp')
    .service('gridTemplates', [GridTemplates]);

//------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------//
  function GridTemplates() {
    return {
      getAdvertiserColumnTemplate: getAdvertiserColumnTemplate
    };
  }

//------------------------------------------------------------------------------------------------------------------//
//------------------------------------------Public methods----------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------//

  var getAdvertiserColumnTemplate = function(){
    return [
      {
        'name': 'id',
        'displayName': '#',
        'cellTemplate': '<div class="ui-grid-cell-contents center-text" tooltip="{{COL_FIELD}}" ng-bind="COL_FIELD"></div>',
        'width': '40',
        'type' : 'number',
        'resizable': true

      },
      {
        'name': 'name',
        'displayName': 'Name',
        'cellTemplate': '<div class="ui-grid-cell-contents" uib-tooltip="{{COL_FIELD}}" ng-bind="COL_FIELD"></div>',
        'width': '*',
        resizable: true
      },
      //{
      //  'name': 'description',
      //  'displayName': 'description',
      //  'cellTemplate': '<div class="ui-grid-cell-contents" uib-tooltip="{{COL_FIELD}}" ><div btf-markdown=" row.entity.description"></div></div>',
      //  'width': '*',
      //  enableSorting: false,
      //  resizable: true
      //},
      {
        'name': 'link',
        'displayName': 'Link',
        'cellTemplate': '<div class="ui-grid-cell-contents" uib-tooltip="{{COL_FIELD}}" ><a target="_blank" href="{{COL_FIELD}}"><span ng-bind="COL_FIELD"> </span> </a></div>',
        'width': '*',
        enableSorting: false,
        resizable: true
      },
      {
        'name': 'createdAt',
        'displayName': 'Created',
        'cellTemplate': '<div class="ui-grid-cell-contents" uib-tooltip="{{COL_FIELD  | date  : short}}" ng-bind="(COL_FIELD  | date  : short)"></div>',
        'width': '100',
        type: 'date',
        resizable: true
      },
      {
        'name': 'updatedAt',
        'displayName': 'Updated',
        'cellTemplate': '<div class="ui-grid-cell-contents" uib-tooltip="{{COL_FIELD  | date}}" ng-bind="(COL_FIELD  | date  : short)"></div>',
        'width': '100',
        type: 'date',
        resizable: true
      },
      {
        'field' : 'Edit',
        'displayName' : 'Edit',
        'cellTemplate': '<div class="ui-grid-cell-contents center-text"><a href="/#/{{row.entity.id}}"> <button class="btn  btn-primary"><span class="fa fa-pencil"></span></button></a> </div>',
        'width': '50',
        enableSorting: false
      }
    ];
  };


//------------------------------------------------------------------------------------------------------------------//
//------------------------------------------Private methods---------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------//
})();

