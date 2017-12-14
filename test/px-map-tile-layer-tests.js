describe('px-map-tile-layer', function () {
  var sandbox;

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('decodes its `url` attribute if `decodeUrl` is enabled', function() {
    var encodedTileEl = fixture('TileLayerEncodedUrlFixture');
    var encodedUrl = encodedTileEl.url;
    var options = encodedTileEl.getInstOptions();
    expect(options.url).to.equal('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  });
});
