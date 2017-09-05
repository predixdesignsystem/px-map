document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe ('PxMapBehavior.MarkerGroup base', function() {
    var markerGroup;
    var sandbox;

    before(function() {
      // Create a stub for the MarkerGroup base behavior
      Polymer({
        is: 'px-map-marker-group-behavior-stub',
        behaviors: [PxMapBehavior.MarkerGroup]
      });
    });

    beforeEach(function() {
      markerGroup = fixture('MarkerGroupBehaviorFixture');
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('correctly colors individual custom type markers that are created as part of a marker group', function() {
      var feature = {"type":"Feature","geometry":{"type":"Point","coordinates":["-117.2738099","32.84013845"]},"properties":{"marker-icon":{"icon-base":"static-icon","icon-type":"custom-0"}},"id":"10001"}
      var markerEl = markerGroup._createMarker(feature);
      var markerHtml = markerEl.options.icon.options.html;
      sinon.assert.match(markerHtml, (`<div class="map-icon-static__wrapper">
          <i class="map-icon-static__body" style="background-color: salmon;"></i>
          <i class="map-icon-static__descender" style="border-color: salmon transparent transparent;"></i>
          <i class="map-icon-static__badge" style="background-color: salmon;"></i>
        </div>`));
    });

  });

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

  });

}
