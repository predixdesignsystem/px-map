describe('px-map-layer-geojson', function () {
  var geoJSONLayerFixture;
  var noAttributesFixture;
  var blankLayerFixture;
  var justDataFixture;
  var featureStylesFixture;

  beforeEach(function (done) {
    geoJSONLayerFixture = fixture('GeoJSONLayerFixture');
    geoJSONLayerFixturePoint = fixture('GeoJSONLayerFixturePoint');
    noAttributesFixture = fixture('GeoJSONLayerFixtureNoAttributes');
    justDataFixture = fixture('GeoJSONLayerFixtureOnlyData');
    featureStylesFixture = fixture('GeoJSONLayerFixtureFeatureStyles');
    withPopupFixture = fixture('GeoJSONLayerFixtureWithPopup');
    withPopupSetLateFixture = fixture('GeoJSONLayerFixtureWithPopupSetLate');
    flushAndRender(done, 3);
  });

  it('creates an instance of L.GeoJson after attaching', function() {
    var geoJSONLayerInstance = geoJSONLayerFixture.querySelector('px-map-layer-geojson').elementInst;
    expect(geoJSONLayerInstance).to.be.an.instanceof(L.Layer);
  });

  it('adds itself as a layer to the px-map', function() {
    var pxMap = geoJSONLayerFixture.elementInst;
    var layers = 0;

    pxMap.eachLayer(function(layer) {
      if (layer instanceof L.CircleMarker) {
        layers++;
      }
    });

    expect(pxMap).to.exist;
    expect(layers).to.eql(1);
  });

  it('doesn\'t create an instance if there is no data supplied', function() {
    var geoJSONLayerInstance = noAttributesFixture.querySelector('px-map-layer-geojson').elementInst;
    expect(geoJSONLayerInstance).to.be.null;
  });

  it('adds data to the map through attributes (via `data=`)', function() {
    var dataObject = {"type": "FeatureCollection", "features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [0.11278152465820314,52.23526420307733]}}]};

    var geoJSONLayer = geoJSONLayerFixture.querySelector('px-map-layer-geojson');
    var geoJSONLayerInstance = geoJSONLayer.elementInst;
    var geoJSONLayerOptions = geoJSONLayer.getInstOptions();
    var drawnFeature = geoJSONLayerInstance.getLayers()[0].feature;

    expect(geoJSONLayerOptions).to.be.an('object');
    expect(geoJSONLayerOptions).to.have.property('data');
    expect(geoJSONLayerOptions.data).to.deep.equal(dataObject);
    expect(drawnFeature).to.deep.equal(dataObject.features[0]);
  });

  it('adds data to the map through JavaScript property changes (via `set()`)', function(done) {
    var dataObject = {"type": "FeatureCollection", "features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [0.11278152465820314,52.23526420307733]}}]};
    var geoJSONLayer = noAttributesFixture.querySelector('px-map-layer-geojson');
    geoJSONLayer.set('data', dataObject);

    flushAndRender(function(){
      var geoJSONLayerInstance = geoJSONLayer.elementInst;
      var geoJSONLayerOptions = geoJSONLayer.getInstOptions();
      var drawnFeature = geoJSONLayerInstance.getLayers()[0].feature;

      expect(geoJSONLayerOptions).to.be.an('object');
      expect(geoJSONLayerOptions).to.have.property('data');
      expect(geoJSONLayerOptions.data).to.deep.equal(dataObject);
      expect(drawnFeature).to.deep.equal(dataObject.features[0]);
      done();
    }, 1);
  });

  it('updates the data drawn on the map when an object passed into `data` is deeply changed and `update()` is called', function() {
    var newGeometry = {"type": "Point","coordinates": [12,-14]};
    var geoJSONLayer = geoJSONLayerFixture.querySelector('px-map-layer-geojson');
    var geoJSONLayerInstance = geoJSONLayer.elementInst;
    var initialData = geoJSONLayer.data;
    initialData.features[0].geometry = newGeometry;
    geoJSONLayer.update();
    var drawnLayer = geoJSONLayerInstance.getLayers()[0];

    expect(drawnLayer.feature.geometry).to.deep.equal(newGeometry);
    expect(drawnLayer.getLatLng()).to.have.property('lat').that.eql(-14);
    expect(drawnLayer.getLatLng()).to.have.property('lng').that.eql(12);
  });

  it('updates the data drawn on the map when the `data` property is changed and Polymer\'s property observers are triggered', function(done) {
    var initialData = {"type": "FeatureCollection", "features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [0.11278152465820314,52.23526420307733]}}]};
    var newData = {"type": "FeatureCollection", "features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [18,-12]}}]};

    var geoJSONLayer = geoJSONLayerFixture.querySelector('px-map-layer-geojson');
    var geoJSONLayerInstance = geoJSONLayer.elementInst;
    geoJSONLayer.set('data', newData);

    flushAndRender(() => {
      var drawnLayer = geoJSONLayerInstance.getLayers()[0];
      expect(drawnLayer.feature).to.deep.equal(newData.features[0]);
      expect(drawnLayer.getLatLng()).to.have.property('lat').that.eql(-12);
      expect(drawnLayer.getLatLng()).to.have.property('lng').that.eql(18);
      done();
    }, 1);
  });

  it('clears the data off the map when the `data` property is changed to an empty object', function(done) {
    var geoJSONLayer = geoJSONLayerFixture.querySelector('px-map-layer-geojson');
    var geoJSONLayerInstance = geoJSONLayer.elementInst;
    geoJSONLayer.set('data', {});

    flushAndRender(() => {
      expect(geoJSONLayerInstance.getLayers()).to.be.empty;
      done();
    }, 1);
  });

  it('styles features correctly through attributes (via `feature-style=`)', function() {
    var featureStyles = {'color': 'green'};
    var geoJSONLayer = geoJSONLayerFixture.querySelector('px-map-layer-geojson');
    var geoJSONLayerInstance = geoJSONLayer.elementInst;
    var geoJSONLayerOptions = geoJSONLayer.getInstOptions();
    var drawnLayer = geoJSONLayerInstance.getLayers()[0];

    expect(geoJSONLayerOptions).to.have.property('featureStyle').that.eql(featureStyles);
    expect(drawnLayer.options).to.have.property('color').that.eql('green');
  });

  it('updates feature styles when they are changed', function(done) {
    var newStyles = {'color': 'orange'};
    var geoJSONLayer = geoJSONLayerFixture.querySelector('px-map-layer-geojson');
    var geoJSONLayerInstance = geoJSONLayer.elementInst;
    geoJSONLayer.set('featureStyle', newStyles);

    flushAndRender(() => {
      var geoJSONLayerOptions = geoJSONLayer.getInstOptions();
      var drawnLayer = geoJSONLayerInstance.getLayers()[0];

      expect(geoJSONLayerOptions).to.have.property('featureStyle').that.eql(newStyles);
      expect(drawnLayer.options).to.have.property('color').that.eql('orange');
      done();
    }, 1)
  });

  it('uses a features properties style if it exists', function() {
    var geoJSONLayerInstance = featureStylesFixture.querySelector('px-map-layer-geojson').elementInst;
    var layerStyle = geoJSONLayerInstance.getLayers()[0].options;

    expect(layerStyle).to.have.property('color').that.eql('#ff0000');
  });

  it('uses a default style if no other styles are set', function() {
    var geoJSONLayerInstance = justDataFixture.querySelector('px-map-layer-geojson').elementInst;
    var layerStyle = geoJSONLayerInstance.getLayers()[0].options;

    expect(layerStyle).to.have.property('radius');
    expect(layerStyle).to.have.property('color');
    expect(layerStyle).to.have.property('fillColor');
    expect(layerStyle).to.have.property('weight');
    expect(layerStyle).to.have.property('opacity');
  });

  it('binds a popup to a feature if `showFeatureProperties` is initially set and the feature has valid keys/values in its properties object', function() {
    var geoJSONLayerInstance = withPopupFixture.querySelector('px-map-layer-geojson').elementInst;
    var featureLayerPopup = geoJSONLayerInstance.getLayers()[0].getPopup();

    expect(featureLayerPopup).to.be.an.instanceof(L.Popup);
  });

  it('doesn\'t bind a popup to a feature if `showFeatureProperties` is initially set and the feature doesn\'t have valid keys/values in its properties object', function() {
    var geoJSONLayerInstance = withPopupFixture.querySelector('px-map-layer-geojson').elementInst;
    var featureLayerWithoutPopup = geoJSONLayerInstance.getLayers()[1].getPopup();

    expect(featureLayerWithoutPopup).to.be.undefined;
  });

  it('binds a popup to a feature if `showFeatureProperties` is changed from false to true', function(done) {
    var geoJSONLayer = withPopupSetLateFixture.querySelector('px-map-layer-geojson');
    var geoJSONLayerInstance = geoJSONLayer.elementInst;
    var initialPopup = geoJSONLayerInstance.getLayers()[0].getPopup();
    geoJSONLayer.set('showFeatureProperties', true);

    flushAndRender(() => {
      var laterPopup = geoJSONLayerInstance.getLayers()[0].getPopup();

      expect(initialPopup).to.be.undefined;
      expect(laterPopup).to.be.an.instanceof(L.Popup);
      done();
    }, 1);
  });

  it('unbinds a popup from a feature if `showFeatureProperties` is changed from true to false', function(done) {
      var geoJSONLayer = withPopupFixture.querySelector('px-map-layer-geojson');
      var geoJSONLayerInstance = geoJSONLayer.elementInst;
      var initialPopup = geoJSONLayerInstance.getLayers()[0].getPopup();

      flushAndRender(() => {
        geoJSONLayer.set('showFeatureProperties', false);
        var laterPopup = geoJSONLayerInstance.getLayers()[0].getPopup();

        expect(initialPopup).to.be.an.instanceof(L.Popup);
        expect(laterPopup).to.be.null;
        done();
      }, 1);
  });

  it('creates a circle marker from Point features', function() {
    var geoJSONLayer = withPopupFixture.querySelector('px-map-layer-geojson');
    var geoJSONLayerInstance = geoJSONLayer.elementInst;
    var drawnLayer = geoJSONLayerInstance.getLayers()[0];

    expect(drawnLayer).to.be.an.instanceof(L.CircleMarker);
  });

});

describe('(events) px-map-layer-geojson', function() {
  it('fires an event when a feature is drawn and added', function(done) {
    var addListener = sinon.stub();
    document.addEventListener('px-map-layer-geojson-feature-added', addListener);
    var map = fixture('GeoJSONLayerFixtureOnlyData');

    flushAndRender(() => {
      expect(addListener).to.be.calledOnce;
      done();
    });
  });

  it('fires an event when a feature is removed', function(done) {
    var removeListener = sinon.stub();
    document.addEventListener('px-map-layer-geojson-feature-removed', removeListener);
    var map = fixture('GeoJSONLayerFixtureOnlyData');

    flushAndRender(() => {
      var geoJSONLayer = map.querySelector('px-map-layer-geojson');
      var featureData = geoJSONLayer.data.features[0];
      geoJSONLayer.set('data', {});

      flushAndRender(() => {
        expect(removeListener).to.be.calledOnce;
        expect(removeListener.firstCall.args[0].detail.feature).to.deep.equal(featureData);
        done();
      })
    });
  });

  it('fires an event when a feature is tapped', function(done) {
    var tapListener = sinon.stub();
    document.addEventListener('px-map-layer-geojson-feature-tapped', tapListener);
    var map = fixture('GeoJSONLayerFixtureOnlyData');

    flushAndRender(() => {
      var geoJSONLayer = map.querySelector('px-map-layer-geojson');
      var featureData = geoJSONLayer.data.features[0];
      var featureLayer = geoJSONLayer.elementInst.getLayers()[0];
      featureLayer.fire('click', {});

      flushAndRender(() => {
        expect(tapListener).to.be.calledOnce
        expect(tapListener.firstCall.args[0].detail.feature).to.deep.equal(featureData);
        done();
      });
    });
  });

  it('fires an event when a feature\'s popup is opened', function(done) {
    var popupOpenListener = sinon.stub();
    document.addEventListener('px-map-layer-geojson-feature-popup-opened', popupOpenListener);
    var map = fixture('GeoJSONLayerFixtureWithPopup');

    flushAndRender(() => {
      var geoJSONLayer = map.querySelector('px-map-layer-geojson');
      var featureData = geoJSONLayer.data.features[0];
      var featureLayer = geoJSONLayer.elementInst.getLayers()[0];
      featureLayer.fire('popupopen', {});

      flushAndRender(() => {
        expect(popupOpenListener).to.be.calledOnce
        expect(popupOpenListener.firstCall.args[0].detail.feature).to.deep.equal(featureData);
        done();
      });
    });
  });

  it('fires an event when a feature\'s popup is closed', function(done) {
    var popupCloseListener = sinon.stub();
    document.addEventListener('px-map-layer-geojson-feature-popup-closed', popupCloseListener);
    var map = fixture('GeoJSONLayerFixtureWithPopup');

    flushAndRender(() => {
      var geoJSONLayer = map.querySelector('px-map-layer-geojson');
      var featureData = geoJSONLayer.data.features[0];
      var featureLayer = geoJSONLayer.elementInst.getLayers()[0];
      featureLayer.fire('popupclose', {});

      flushAndRender(() => {
        expect(popupCloseListener).to.be.calledOnce
        expect(popupCloseListener.firstCall.args[0].detail.feature).to.deep.equal(featureData);
        done();
      });
    });
  });
});
