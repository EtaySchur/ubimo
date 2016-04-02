'use strict';

describe('Directive: actionsBar', function () {

  // load the directive's module
  beforeEach(module('ubimoDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<actions-bar></actions-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the actionsBar directive');
  }));
});
