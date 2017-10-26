document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('px-map-marker-group colors', function () {
    var sandbox;

    before(function () {
      Polymer({ is: 'px-map-marker-cluster-default-colors' });
      Polymer({ is: 'px-map-marker-cluster-css-vars' });
      Polymer({ is: 'px-map-marker-cluster-colors-by-type' });
      Polymer({ is: 'px-map-marker-cluster-css-vars-and-colors-by-type' });
      Polymer({ is: 'px-map-style-test-default-colors' });
      Polymer({ is: 'px-map-style-test-css-vars' });
      Polymer({ is: 'px-map-style-test-colors-by-type' });
      Polymer({ is: 'px-map-style-test-colors-by-type-and-css-vars' });
      Polymer({ is: 'px-map-style-test-css-vars-updated' });
    });

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    // it('adds custom color types to the _colorsByType object', function(done) {
    //   customMarkerGroupFixture = fixture('CustomTypeMarkerGroupFixture');
    //   markerGroup = customMarkerGroupFixture.querySelector('px-map-marker-group');
    //
    //   setTimeout(function() {
    //     var colorsByType = markerGroup.colorsByType;
    //     var keys = Object.keys(colorsByType);
    //     expect(keys.includes('custom-0')).to.equal(true);
    //     expect(keys.includes('custom-1')).to.equal(true);
    //     expect(keys.includes('custom-2')).to.equal(true);
    //     done();
    //   }, 2000);
    // });

    it('correctly colors the marker cluster with default colors if not set elsewhere', function(done) {
      var fx = fixture('MarkerClusterWithDefaultColors');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        var featGroup = markerGroup.elementInst._featureGroup;
        var layerKey = Object.keys(featGroup._layers)[0];
        var layer = featGroup._layers[layerKey];
        var layerIconNode = layer._icon;
        var paths = layerIconNode.querySelectorAll('path');
        var pathColors = Array.prototype.map.call(paths, function(pathNode) {
          return pathNode.getAttribute('fill');
        });
        expect(pathColors.indexOf('undefined') === -1).to.be.true; // undefined will be coerced into a string
        expect(pathColors.indexOf('red') > -1).to.be.true;
        expect(pathColors.indexOf('orange') > -1).to.be.true;
        expect(pathColors.indexOf('blue') > -1).to.be.true;
        expect(pathColors.indexOf('gray') > -1).to.be.true;
        done();
      }, 1000);
    });

    it('correctly colors the marker cluster with colors set by custom CSS vars', function(done) {
      var fx = fixture('MarkerClusterWithCSSVars');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        var featGroup = markerGroup.elementInst._featureGroup;
        var layerKey = Object.keys(featGroup._layers)[0];
        var layer = featGroup._layers[layerKey];
        var layerIconNode = layer._icon;
        var paths = layerIconNode.querySelectorAll('path');
        var pathColors = Array.prototype.map.call(paths, function(pathNode) {
          return pathNode.getAttribute('fill');
        });
        expect(pathColors.indexOf('undefined') === -1).to.be.true; // undefined will be coerced into a string
        expect(pathColors.indexOf('tomato') > -1).to.be.true;
        expect(pathColors.indexOf('olive') > -1).to.be.true;
        expect(pathColors.indexOf('cornflowerblue') > -1).to.be.true;
        expect(pathColors.indexOf('crimson') > -1).to.be.true;
        done();
      }, 1000);
    });

    it('correctly colors the marker cluster with colors set in colorsByType', function(done) {
      var fx = fixture('MarkerClusterWithColorsByType');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        var featGroup = markerGroup.elementInst._featureGroup;
        var layerKey = Object.keys(featGroup._layers)[0];
        var layer = featGroup._layers[layerKey];
        var layerIconNode = layer._icon;
        var paths = layerIconNode.querySelectorAll('path');
        var pathColors = Array.prototype.map.call(paths, function(pathNode) {
          return pathNode.getAttribute('fill');
        });
        expect(pathColors.indexOf('undefined') === -1).to.be.true; // undefined will be coerced into a string
        expect(pathColors.indexOf('red') > -1).to.be.true;
        expect(pathColors.indexOf('orange') > -1).to.be.true;
        expect(pathColors.indexOf('yellow') > -1).to.be.true;
        expect(pathColors.indexOf('green') > -1).to.be.true;
        done();
      }, 1000);
    });

    it('correctly colors the marker cluster with colors set by custom CSS vars and colorsByType', function(done) {
      var fx = fixture('MarkerClusterWithCSSVarsAndColorsByType');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        var featGroup = markerGroup.elementInst._featureGroup;
        var layerKey = Object.keys(featGroup._layers)[0];
        var layer = featGroup._layers[layerKey];
        var layerIconNode = layer._icon;
        var paths = layerIconNode.querySelectorAll('path');
        var pathColors = Array.prototype.map.call(paths, function(pathNode) {
          return pathNode.getAttribute('fill');
        });
        expect(pathColors.indexOf('undefined') === -1).to.be.true; // undefined will be coerced into a string
        expect(pathColors.indexOf('orchid') > -1).to.be.true;
        expect(pathColors.indexOf('hotpink') > -1).to.be.true;
        expect(pathColors.indexOf('salmon') > -1).to.be.true;
        expect(pathColors.indexOf('darkturquoise') > -1).to.be.true;
        done();
      }, 1000);
    });

    it('sets the icon colors using default colors if not set elsewhere', function(done) {
      var fx = fixture('MarkerGroupWithDefaultColors');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        var layers = markerGroup.elementInst.getLayers();
        var colorsWeExpect = {
          'info' : '	rgb(0, 0, 255)', /* blue */
          'warning' : '	rgb(255, 165, 0)', /* orange */
          'important' : '	rgb(255, 0, 0)', /* red */
          'unknown' : 'rgb(128, 128, 128)' /* gray */
        };
        layers.forEach(function(layer) {
          // e.g. 'info', 'custom-N', etc.
          var layerType = layer.featureProperties['marker-icon']['icon-type'];
          var expectedColor = colorsWeExpect[layerType];
          var actualColor = window.getComputedStyle(layer._icon.querySelector('.map-icon-static__body')).backgroundColor;
          expect(expectedColor.replace(/\s+/g, '') === actualColor.replace(/\s+/g, '')).to.be.true;
        });
        done();
      }, 1000);
    });

    it('sets the icon colors using only CSS variables', function(done) {
      var fx = fixture('MarkerGroupWithCSSVars');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        var layers = markerGroup.elementInst.getLayers();
        var colorsWeExpect = {
          'info' : 'rgb(0, 206, 209)', /* darkturquoise */
          'custom-0' : 'rgb(250, 128, 114)', /* salmon */
          'custom-1' : 'rgb(255, 105, 180)', /* hotpink */
          'custom-2' : 'rgb(218, 112, 214)' /* orchid */
        };
        layers.forEach(function(layer) {
          // e.g. 'info', 'custom-N', etc.
          var layerType = layer.featureProperties['marker-icon']['icon-type'];
          var expectedColor = colorsWeExpect[layerType];
          var actualColor = window.getComputedStyle(layer._icon.querySelector('.map-icon-static__body')).backgroundColor;
          expect(expectedColor.replace(/\s+/g, '') === actualColor.replace(/\s+/g, '')).to.be.true;
        });
        done();
      }, 1000);
    });

    it('sets the icon colors using only the colors-by-type attribute', function(done) {
      var fx = fixture('MarkerGroupWithColorsByType');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        var layers = markerGroup.elementInst.getLayers();
        var colorsWeExpect = {
          'custom-0' : 'rgb(255, 0, 0)', /* red */
          'custom-1' : 'rgb(255, 165, 0)', /* orange */
          'custom-2' : 'rgb(255, 255, 0)', /* yellow */
          'info' : 'rgb(0, 128, 0)' /* green */
        };
        layers.forEach(function(layer) {
          // e.g. 'info', 'custom-N', etc.
          var layerType = layer.featureProperties['marker-icon']['icon-type'];
          var expectedColor = colorsWeExpect[layerType];
          var actualColor = window.getComputedStyle(layer._icon.querySelector('.map-icon-static__body')).backgroundColor;
          expect(expectedColor.replace(/\s+/g, '') === actualColor.replace(/\s+/g, '')).to.be.true;
        });
        done();
      }, 1000);
    });

    it('overrides CSS properties with colors-by-type', function(done) {
      var fx = fixture('MarkerGroupWithColorsByTypeAndCSSVars');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        var layers = markerGroup.elementInst.getLayers();
        var colorsWeExpect = {
          'custom-0' : 'rgb(255, 99, 71)', /* tomato */
          'custom-1' : 'rgb(128, 128, 0)', /* olive */
          'custom-2' : 'rgb(210, 105, 30)', /* chocolate */
          'info' : 'rgb(240, 255, 240)', /* honeydew */
          'warning' : 'rgb(0, 255, 0)' /* lime */
        };
        layers.forEach(function(layer) {
          // e.g. 'info', 'custom-N', etc.
          var layerType = layer.featureProperties['marker-icon']['icon-type'];
          var expectedColor = colorsWeExpect[layerType];
          var actualColor = window.getComputedStyle(layer._icon.querySelector('.map-icon-static__body')).backgroundColor;
          expect(expectedColor.replace(/\s+/g, '') === actualColor.replace(/\s+/g, '')).to.be.true;
        });
        done();
      }, 1000);
    });

    it('updates the marker colors when `updateStyles` is called', function(done) {
      var fx = fixture('MarkerGroupWithCSSVars');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');

      setTimeout(function() {
        fx.updateStyles({
          '--px-map-color-custom-0' : 'tomato',
          '--px-map-icon-info-color' : 'honeydew'
        });
        var layers = markerGroup.elementInst.getLayers();
        var colorsWeExpect = {
          'custom-0' : 'rgb(255, 99, 71)', /* tomato */
          'custom-1' : 'rgb(255, 105, 180)', /* hotpink */
          'custom-2' : 'rgb(218, 112, 214)', /* orchid */
          'info' : 'rgb(240, 255, 240)' /* honeydew */
        };
        layers.forEach(function(layer) {
          // e.g. 'info', 'custom-N', etc.
          var layerType = layer.featureProperties['marker-icon']['icon-type'];
          var expectedColor = colorsWeExpect[layerType];
          var actualColor = window.getComputedStyle(layer._icon.querySelector('.map-icon-static__body')).backgroundColor;
          expect(expectedColor.replace(/\s+/g, '') === actualColor.replace(/\s+/g, '')).to.be.true;
        });
        done();
      }, 1000);
    });

    it('does not call `redraw` when the colors are first set, but does call it when the colors are updated with `updateStyles`', function(done) {
      var fx = fixture('MarkerGroupWithCSSVars');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');
      var redrawSpy = sandbox.spy(markerGroup, 'redraw');

      setTimeout(function() {
        expect(redrawSpy.callCount === 0).to.be.true;
        fx.updateStyles({
          '--px-map-color-custom-0' : 'tomato',
          '--px-map-icon-info-color' : 'honeydew'
        });
        expect(redrawSpy.callCount === 1).to.be.true;
        done();
      }, 1000);
    });

    it('calls the redraw method when the `colorsByType` object is changed by reference', function(done) {
      var fx = fixture('MarkerGroupWithCSSVars');
      var markerGroup = Polymer.dom(fx.root).querySelector('px-map').querySelector('px-map-marker-group');
      var redrawSpy = sandbox.spy(markerGroup, 'redraw');

      setTimeout(function() {
        markerGroup.colorsByType = {
          'info' : 'hotpink'
        };
        expect(redrawSpy.callCount === 1).to.be.true;
        done();
      }, 1000);
    });
  });
}
