document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('PxMapBehavior.Marker base', function() {
    var markerEl;
    var sandbox = sinon.sandbox.create();;

    sandbox.stub(window.console, "log");

    before(function() {
      // Create a stub for the Marker base behavior
      Polymer({
        is: 'px-map-marker-behavior-stub',
        behaviors: [PxMapBehavior.Marker]
      });
    });

    beforeEach(function () {
      markerEl = fixture('MarkerBehaviorFixture');
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('validates whether a given input is a number', function () {
      expect(markerEl._canBeNum(5)).to.be.true;
      expect(markerEl._canBeNum(0)).to.be.true;
      expect(markerEl._canBeNum("5")).to.be.true;
      expect(markerEl._canBeNum("abc")).to.be.false;
      expect(markerEl._canBeNum(NaN)).to.be.false;
      expect(markerEl._canBeNum("")).to.be.false;
    });

    it('validates whether given lat and lng values are valid', function () {
      expect(markerEl.latLngIsValid(10,20)).to.be.true;
      expect(markerEl.latLngIsValid("10","20")).to.be.true;
      expect(markerEl.latLngIsValid("abc10","20")).to.be.false;
      expect(markerEl.latLngIsValid(10,"")).to.be.false;
      expect(markerEl.latLngIsValid("","")).to.be.false;
    });

    it('outputs a console log statement if the lat or lng is invalid', function() {
      var invalidLatLng = markerEl.latLngIsValid("abc", 123);

      //sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, `PX-MAP CONFIGURATION ERROR:
        You entered an invalid \`lat\` or \`lng\` attribute for ${markerEl.is}. You must pass a valid number.`)
    });

    it('does not draw a marker if either the lat or lng value is invalid', function() {
      var invalidLatLngMarkerEl = fixture('InvalidLatLngMarkerFixture');

      expect(invalidLatLngMarkerEl.elementInst).to.be.null;
    });


});

}
