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

  describe('Setting the geometry properties on px-map', function() {
    it('updates its map view and doesn\'t clobber the property when `lat` is changed', function(done) {
      var mapEl = fixture('fixture-basic-map');
      mapEl.set('lat', 10);

      setTimeout(function(){
        var newMapLatLng = mapEl.elementInst.getCenter();
        expect(mapEl.lat).to.equal(10);
        expect(newMapLatLng.lat).to.equal(10);
        done();
      }, 10);
    });

    it('updates its map view and doesn\'t clobber the property when `lng` is changed', function(done) {
      var mapEl = fixture('fixture-basic-map');
      mapEl.set('lng', 7);

      setTimeout(function(){
        var newMapLatLng = mapEl.elementInst.getCenter();
        expect(mapEl.lng).to.equal(7);
        expect(newMapLatLng.lng).to.equal(7);
        done();
      }, 10);
    });

    it('updates its map view and doesn\'t clobber the property when `zoom` is changed', function(done) {
      var mapEl = fixture('fixture-basic-map');
      mapEl.set('zoom', 6);

      setTimeout(function(){
        var newMapZoom = mapEl.elementInst.getZoom();
        expect(mapEl.zoom, 'the `zoom` property was reset to its old value').to.equal(6);
        expect(newMapZoom, 'the map zoom was not set to its new value').to.equal(6);
        done();
      }, 400);
    });

    it('fires an event once when all of lat, lng, and zoom are set in quick succession', function(done) {
      this.timeout(400);

      var mapEl = fixture('fixture-basic-map');
      mapEl.addEventListener('px-map-moved', function(evt) {
        expect(evt.detail).to.be.an('object');
        expect(evt.detail).to.have.all.keys('lat', 'lng', 'zoom', 'bounds');
        expect(evt.detail.lat).to.equal(12);
        expect(evt.detail.lng).to.equal(-13);
        expect(evt.detail.zoom).to.equal(14);
        done();
      });

      mapEl.set('lat', 12);
      mapEl.set('lng', -13);
      mapEl.set('zoom', 14);
    });
  });
}
