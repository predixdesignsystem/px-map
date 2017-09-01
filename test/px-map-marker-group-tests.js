document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {
  describe('px-map-marker-group with custom types', function () {
    var customMarkerGroupFixture;
    var markerGroup;
    var sandbox;

    beforeEach(function () {
      customMarkerGroupFixture = fixture('CustomTypeMarkerGroupFixture');
      markerGroup = customMarkerGroupFixture.querySelector('px-map-marker-group');
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('adds custom color types to the colorsByType object', function(done) {
      setTimeout(function() {
        var colorsByType = markerGroup.colorsByType;
        var keys = Object.keys(colorsByType);
        expect(keys.includes('custom-0')).to.equal(true);
        expect(keys.includes('custom-1')).to.equal(true);
        expect(keys.includes('custom-2')).to.equal(true);
        done();
      }, 2000);
    });

    it('sends custom cluster colors down to individual markers', function(done) {
      setTimeout(function() {
        // do something to make _createMarkerIcon be called with a custom icon type
        // check that when _createMarkerIcon is called, options is updated with
        // the custom color of the icon
        done();
      }, 2000);
    });

  });

}
