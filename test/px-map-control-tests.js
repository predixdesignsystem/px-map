document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('PxMap.LocateControl class', function () {
    var locateInst;
    var sandbox;

    beforeEach(function() {
      locateInst = new PxMap.LocateControl();
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('constructor creates a new `L.Control` instance', function() {
      expect(locateInst).to.be.an.instanceof(L.Control);
    });

    it('sets a default moveMaxZoom of null if none is defined when created', function() {
      expect(locateInst.options).to.be.an('object');
      expect(locateInst.options).to.have.property('moveMaxZoom');
      expect(locateInst.options.moveMaxZoom).to.equal(null);
    });

    it('sets its moveMaxZoom property to a given value when created', function() {
      var moveMaxZoomLocate = new PxMap.LocateControl({moveMaxZoom: 10});
      expect(moveMaxZoomLocate.options.moveMaxZoom).to.equal(10);
    });

    it('changes its moveMaxZoom property to a given number using setMoveMaxZoom method', function() {
      locateInst.setMoveMaxZoom(5);
      expect(locateInst.options.moveMaxZoom).to.equal(5);
    });

    it('changes its moveMaxZoom property to a given stringified number using setMoveMaxZoom method', function() {
      locateInst.setMoveMaxZoom("6");
      expect(locateInst.options.moveMaxZoom).to.equal(6);
    });

    it('calls the L.Map locate() method with its configured moveMaxZoom', function() {
      var moveMaxZoomLocate = new PxMap.LocateControl({moveMaxZoom: 10});

      // Stub out methods
      var locateFn = sinon.stub();
      moveMaxZoomLocate._map = {
        locate: locateFn
      }
      var setLocatingStateFn = sinon.stub(moveMaxZoomLocate, '_setLocatingState');

      moveMaxZoomLocate.locate();

      expect(locateFn).to.have.been.calledOnce;
      expect(locateFn).to.have.been.calledWithMatch({maxZoom: 10});
      expect(setLocatingStateFn).to.have.been.calledOnce;
    });
  });

}
