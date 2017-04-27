document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('px-map-vector-layer', function () {
    let vectorLayerFixture;
    let noAttributesFixture;
    let blankLayerFixture;
    let justDataFixture;
    let sandbox;

    beforeEach(function () {
      vectorLayerFixture = fixture('VectorLayerFixture');
      noAttributesFixture = fixture('VectorLayerFixtureNoAttributes');
      blankLayerFixture = fixture('BlankVectorLayerFixture');
      justDataFixture = fixture('VectorLayerFixtureOnlyData');
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('creates an instance of L.geoJson after attaching', function(done) {
      //Matching the wait used in the root-tests, Leaflet needs time to create and attach the layer.
      setTimeout(function(){
        const vectorLayerInstance = vectorLayerFixture.querySelector('px-map-vector-layer').elementInst;

        expect(vectorLayerInstance).to.be.an.instanceof(L.Layer);
        done();
      }, 10);
    });

    it('adds a layer to the px-map', function(done) {
      const pxMap = vectorLayerFixture.elementInst;
      let layers = 0;

      setTimeout(function(){
        pxMap.eachLayer( function(layer) {
          if(layer instanceof L.CircleMarker) {
            layers++;
          }
        });

        expect(pxMap).to.exist;
        expect(layers).to.eql(1);
        done();
      }, 10);
    });

    it('doesn\'t create an instance if there is no data supplied', function(done) {
      setTimeout(function() {
        const vectorLayerInstance = noAttributesFixture.querySelector('px-map-vector-layer').elementInst;

        expect(vectorLayerInstance).to.be.null;
        done();
      }, 10);
    });

    it(`creates an instance with no data if 'blank-layer' is set`, function(done) {
      setTimeout(function() {
        const vectorLayerInstance = blankLayerFixture.querySelector('px-map-vector-layer').elementInst;

        expect(vectorLayerInstance).to.not.be.null;
        done();
      }, 10);
    });

    it('adds data to the map through attributes (via `data=` and `feature-style=`)', function(done) {
      const dataString = '{"type": "FeatureCollection", "features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [0.11278152465820314,52.23526420307733]}}]}';

      setTimeout(function(){
        const vectorLayerInstance = vectorLayerFixture.querySelector('px-map-vector-layer').elementInst;
        const vectorLayerOptions = vectorLayerFixture.querySelector('px-map-vector-layer').getInstOptions();

        expect(vectorLayerOptions).to.be.an('object');
        expect(vectorLayerOptions).to.have.property('data').that.eql(dataString);
        expect(vectorLayerOptions).to.have.property('featureStyle').that.eql({"color": "green"});
        done();
      }, 10);
    });

    it('uses a default style if none is set', function(done) {
      setTimeout(function() {
        const vectorLayerInstance = justDataFixture.querySelector('px-map-vector-layer').elementInst;
        const layerStyle = vectorLayerInstance.getLayers()[0].options;

        expect(layerStyle).to.have.property('radius');
        expect(layerStyle).to.have.property('color');
        expect(layerStyle).to.have.property('fillColor');
        expect(layerStyle).to.have.property('weight');
        expect(layerStyle).to.have.property('opacity');
        done();
      }, 10);
    });

  });


}
