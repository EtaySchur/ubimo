'use strict';

describe('Service: gridTemplates', function () {

  // load the service's module
  beforeEach(module('ubimoDemoApp'));

  // instantiate service
  var gridTemplates;
  beforeEach(inject(function (_gridTemplates_) {
    gridTemplates = _gridTemplates_;
  }));

  it('should do something', function () {
    expect(!!gridTemplates).toBe(true);
  });

});
