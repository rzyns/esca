'use strict';

describe('Service: CorePhoneticData', function () {

  // load the service's module
  beforeEach(module('escaApp'));

  // instantiate service
  var CorePhoneticData;
  beforeEach(inject(function (_CorePhoneticData_) {
    CorePhoneticData = _CorePhoneticData_;
  }));

  it('should do something', function () {
    expect(!!CorePhoneticData).toBe(true);
  });

});
