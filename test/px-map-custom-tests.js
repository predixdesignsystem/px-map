document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('Basic px-map without options', function () {
    it('has a #map element in its shadow root', function() {
      var mapEl = fixture('fixture-basic-map');
      var shadowTarget = Polymer.dom(mapEl.root).querySelector('#map');

      expect(shadowTarget).to.be.an.instanceof(HTMLElement);
    });

    it('has a #map element that fills its declared height and width', function() {
      var mapEl = fixture('fixture-basic-map');
      var shadowTarget = Polymer.dom(mapEl.root).querySelector('#map');
      var shadowTargetRect = shadowTarget.getBoundingClientRect();

      expect(shadowTargetRect.width, 'width should have been 100px').to.be.closeTo(100,1);
      expect(shadowTargetRect.height, 'width should have been 100px').to.be.closeTo(100,1);
    });

    it('creates an instance of L.Map after attaching', function() {
      var mapEl = fixture('fixture-basic-map');
      var mapInstance = mapEl.elementInst;

      expect(mapInstance).to.be.an.instanceof(L.Map);
    });

    it('has a default lat, lng, and zoom if none are set', function() {
      var mapEl = fixture('fixture-basic-map');

      expect(mapEl.lat).to.be.a('number');
      expect(mapEl.lng).to.be.a('number');
      expect(mapEl.zoom).to.be.a('number');
    });

    it('sets its centerpoint and zoom to the default lat, lng, and zoom if none are set', function() {
      var mapEl = fixture('fixture-basic-map');
      var latLng = mapEl.elementInst.getCenter();
      var zoom = mapEl.elementInst.getZoom();

      expect(latLng.lat).to.equal(37.7672375);
      expect(latLng.lng).to.equal(-121.9584131);
      expect(zoom).to.equal(10);
    });
  });

}
