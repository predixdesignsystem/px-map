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


  });

}
