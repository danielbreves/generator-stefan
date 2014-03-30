describe('Stefan', function() {
  var sandbox = sinon.sandbox.create(),
      stefan = require('stefan');

  beforeEach(function() {
    sandbox.spy(stefan, 'makeCroissants');
    stefan.makeCroissants();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should make croissants', function() {
    expect(stefan.makeCroissants).to.have.been.called;
  });
});
