document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('PxMap.StaticMarker class', function() {
    var markerInst;
    var sandbox;

    beforeEach(function () {
      markerInst = new L.marker();
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('constructor creates a new `L.Marker` instance', function() {
      expect(markerInst).to.be.an.instanceof(L.Marker);
    });

    it('sets the markers properties', function() {
      markerInst.setLatLng([40, 30]);
      expect(markerInst.properties.lat).to.equal(40);
    });

  });

}
