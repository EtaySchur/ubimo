'use strict';

describe('Service: ubimoApi', function () {

  // load the service's module
  beforeEach(module('ubimoDemoApp'));

  // instantiate service
  var ubimoApi;
  beforeEach(inject(function (_ubimoApi_) {
    ubimoApi = _ubimoApi_;
  }));

  it('should do something', function () {
    expect(!!ubimoApi).toBe(true);
  });

});
